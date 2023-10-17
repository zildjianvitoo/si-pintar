import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import OpenAI from "openai";
import { increaseApiLimit, checkApiLimit } from "@/lib/apiLimit";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  try {
    const { userId } = auth();
    const body = await req.json();
    const { prompt, amount = 1, resolution = "512x512" } = body;

    if (!userId) {
      return new NextResponse("Anda harus login terlebih dahulu", {
        status: 401,
      });
    }

    if (!openai.apiKey) {
      return new NextResponse("Api Key tidak dikonfigurasi", {
        status: 500,
      });
    }

    if (!prompt) {
      return new NextResponse("Prompt tidak boleh kosong", {
        status: 400,
      });
    }
    if (!amount) {
      return new NextResponse("Jumlah foto tidak boleh kosong", {
        status: 400,
      });
    }
    if (!resolution) {
      return new NextResponse("Resolusi tidak boleh kosong", {
        status: 400,
      });
    }

    const freeTrial = await checkApiLimit();

    if (!freeTrial) {
      return new NextResponse("Masa percobaan telah habis", { status: 403 });
    }

    const res = await openai.images.generate({
      prompt,
      n: parseInt(amount, 10),
      size: resolution,
    });

    await increaseApiLimit();

    return NextResponse.json(res.data);
  } catch (error) {
    console.log(error);

    return new NextResponse("Terjadi kesalahan", { status: 500 });
  }
}

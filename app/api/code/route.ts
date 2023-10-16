import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import OpenAI from "openai";
import { ChatCompletionMessageParam } from "openai/resources/index.mjs";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const instructionMessage: ChatCompletionMessageParam = {
  role: "system",
  content:
    "Kamu adalah code generator,kamu harus menjawab hanya dengan markdown code snippets.Pakai komen pada kodemu untuk penjelasannya.",
};

export async function POST(req: Request) {
  try {
    const { userId } = auth();
    const body = await req.json();
    const { messages } = body;

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

    if (!messages) {
      return new NextResponse("Prompt tidak boleh kosong", {
        status: 400,
      });
    }

    const res = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [instructionMessage, ...messages],
    });

    return NextResponse.json(res.choices[0].message);
  } catch (error) {
    console.log(error);

    return new NextResponse("Terjadi kesalahan", { status: 500 });
  }
}

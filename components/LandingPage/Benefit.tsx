import { darkerGrotesque, outfit } from "@/public/fonts";

import React from "react";
import { Podcast, Youtube } from "lucide-react";

type Props = {};

export default function Benefit({}: Props) {
  return (
    <section className="relative py-14">
      <div className="container z-10">
        <div className=" flex flex-col gap-12 lg:gap-20  xl:max-w-[80%] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7 ">
            <div className="flex flex-col bg-[#19161C] rounded-xl p-6 lg:p-10">
              <h3
                className={`text-[30px] lg:text-[40px] leading-[40px] ${darkerGrotesque.className} lg:max-w-[90%] `}
              >
                Sintesis dan Desain Gambar Otomatis
              </h3>
              <p className="mt-5 leading-[25px] max-w-[380px] text-[#C4C4C4]">
                Dengan pembuatan gambar yang didukung AI, desainer dan kreatif
                dapat menyederhanakan alur kerja mereka dan membuka tingkat
                efisiensi baru.
              </p>

              <div className="flex flex-col items-start justify-end gap-6 mt-auto lg:flex-row md:justify-start">
                <div className="flex items-center gap-4 border-white border rounded-[30px] px-11 py-2 cursor-pointer">
                  <p className="uppercase">Youtube</p>
                  <Youtube className="text-xl text-[#ED1D24]" />
                </div>
                <div className="flex items-center gap-4 border-white border rounded-[30px] px-11 py-2 cursor-pointer">
                  <p className="uppercase">PODCAST</p>
                  <Podcast className="text-xl" />
                </div>
              </div>
            </div>
            <div className="flex flex-col bg-[#19161C] rounded-xl p-6 lg:p-10">
              <h3
                className={`text-[24px] lg:text-[34px] leading-[40px] ${darkerGrotesque.className} lg:max-w-[95%]`}
              >
                Ciptakan visual yang menakjubkan dalam hitungan detik
              </h3>
              <p className="mt-5 leading-[25px] max-w-[380px] text-[#C4C4C4]">
                Menghasilkan ide-ide inovatif adalah aspek penting dari setiap
                upaya kreatif. Alat AI dapat membantu memicu inspirasi dengan
                menganalisis data dalam jumlah besar
              </p>
              <div className="relative flex items-center mt-6">
                <input
                  className=" rounded-full w-full bg-[#0A0A0A] outline-none py-3 sm:py-5 px-6 placeholder:text-[#848895]"
                  placeholder="Ketik Promptmu"
                />
                <button className="bg-[#D2FF3A] h-fit rounded-full px-3 sm:px-4 py-2 sm:py-3 absolute right-4 ">
                  <p className="font-medium text-black">Generate</p>
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between sm:flex-row gap-y-8 ">
            <div
              className={`flex flex-col  ${darkerGrotesque.className} md:mt-6`}
            >
              <h3 className="text-[42px] leading-9 md:text-[50px] lg:text-[60px]">
                Banyak Gambar
              </h3>
              <h3 className="text-[42px] md:text-[50px] lg:text-[60px]">
                hingga jutaan.
              </h3>
            </div>
            <div className="flex flex-col gap-12 md:gap-14">
              <div className="flex flex-col w-fit">
                <h3
                  className={`text-[70px] text-transparent bg-clip-text bg-gradient-to-r from-[#6843EC] to-[#D2FF3A] leading-none md:text-[90px] lg:text-[120px] ${outfit.className}`}
                >
                  5000+
                </h3>
                <p className="uppercase text-[#C4C4C4]">Gambar di Render</p>
              </div>
              <div className="flex flex-col w-fit">
                <h3
                  className={`text-[70px] text-transparent bg-clip-text bg-gradient-to-r from-[#6843EC] to-[#D2FF3A] leading-none md:text-[90px] lg:text-[120px] ${outfit.className}`}
                >
                  300+
                </h3>
                <p className="uppercase text-[#C4C4C4]">Projek</p>
              </div>
              <div className="flex flex-col w-fit">
                <h3
                  className={`text-[70px] text-transparent bg-clip-text bg-gradient-to-r from-[#6843EC] to-[#D2FF3A] leading-none md:text-[90px] lg:text-[120px] ${outfit.className}`}
                >
                  1000+
                </h3>
                <p className="uppercase text-[#C4C4C4]">Topik</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

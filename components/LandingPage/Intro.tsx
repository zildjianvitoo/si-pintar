import { darkerGrotesque, poppins } from "@/public/fonts";
import React from "react";

type Props = {};

export default function Intro({}: Props) {
  return (
    <section className="py-14">
      <div className=" container">
        <div className=" flex flex-col">
          <h3
            className={`text-[#6843EC] ${darkerGrotesque.className} font-semibold text-2xl text-center tracking-wide uppercase`}
          >
            Powering tools that help you improve creation and production
          </h3>
          <div className="mt-10 lg:mt-20 flex flex-wrap justify-center gap-7 md:gap-11 max-w-5xl mx-auto">
            <div
              className={`bg-[#141414] flex items-center justify-center  text-white font-semibold text-3xl ${poppins.className} w-[270px] h-[160px] rounded-xl`}
            >
              <h3>Facebook</h3>
            </div>
            <div
              className={`bg-[#141414]/40 flex items-center justify-center  text-white font-semibold text-3xl ${poppins.className} w-[270px] h-[160px] rounded-xl`}
            >
              <h3>Google</h3>
            </div>
            <div
              className={`bg-[#141414] flex items-center justify-center  text-white font-semibold text-3xl ${poppins.className} w-[270px] h-[160px] rounded-xl`}
            >
              <h3>Twitter</h3>
            </div>
            <div
              className={`bg-[#141414]/40 flex items-center justify-center  text-white font-semibold text-3xl ${poppins.className} w-[270px] h-[160px] rounded-xl`}
            >
              <h3>ChatGPT</h3>
            </div>
            <div
              className={`bg-[#141414] flex items-center justify-center  text-white font-semibold text-3xl ${poppins.className} w-[270px] h-[160px] rounded-xl`}
            >
              <h3>ModernAI</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { darkerGrotesque, outfit } from "@/public/fonts";
import Image from "next/image";
import React from "react";
import { BsYoutube } from "react-icons/bs";
import { FaPodcast } from "react-icons/fa";

type Props = {};

export default function Benefit({}: Props) {
  return (
    <section className="py-14 relative">
      <div className="container z-10">
        <div className=" flex flex-col gap-12 lg:gap-20  xl:max-w-[80%] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7 ">
            <div className="flex flex-col bg-[#19161C] rounded-xl p-6 lg:p-10">
              <h3
                className={`text-[30px] lg:text-[40px] leading-[40px] ${darkerGrotesque.className} lg:max-w-[90%] `}
              >
                Automated Image Synthesis and Design
              </h3>
              <p className="mt-5 leading-[25px] max-w-[380px] text-[#C4C4C4]">
                With AI-powered image generation, designers and creatives can
                streamline their workflows and unlock new levels of efficiency.
              </p>

              <div className="flex flex-col lg:flex-row justify-end md:justify-start items-start gap-6 mt-10">
                <div className="flex items-center gap-4 border-white border rounded-[30px] px-11 py-2 cursor-pointer">
                  <p className="uppercase">Youtube</p>
                  <BsYoutube className="text-xl text-[#ED1D24]" />
                </div>
                <div className="flex items-center gap-4 border-white border rounded-[30px] px-11 py-2 cursor-pointer">
                  <p className="uppercase">PODCAST</p>
                  <FaPodcast className="text-xl" />
                </div>
              </div>
            </div>
            <div className="flex flex-col bg-[#19161C] rounded-xl p-6 lg:p-10">
              <h3
                className={`text-[30px] lg:text-[40px] leading-[40px] ${darkerGrotesque.className} lg:max-w-[90%]`}
              >
                Create stunning visual in seconds
              </h3>
              <p className="mt-5 leading-[25px] max-w-[380px] text-[#C4C4C4]">
                Generating innovative ideas is a crucial aspect of any creative
                endeavor. AI tools can help spark inspiration by analyzing vast
                amounts of data
              </p>
              <div className="flex items-center  relative mt-6">
                <input
                  className=" rounded-full w-full bg-[#0A0A0A] outline-none py-3 sm:py-5 px-6 placeholder:text-[#848895]"
                  placeholder="Ketik Promptmu"
                />
                <button className="bg-[#D2FF3A] h-fit rounded-full px-3 sm:px-4 py-2 sm:py-3 absolute right-4 ">
                  <p className="text-black font-medium">Generate</p>
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row justify-between gap-y-8 ">
            <div
              className={`flex flex-col  ${darkerGrotesque.className} md:mt-6`}
            >
              <h3 className="text-[42px] leading-9 md:text-[50px] lg:text-[60px]">
                Many Images
              </h3>
              <h3 className="text-[42px] md:text-[50px] lg:text-[60px]">
                of millions.
              </h3>
            </div>
            <div className="flex flex-col gap-12 md:gap-14">
              <div className="flex flex-col w-fit">
                <h3
                  className={`text-[70px] text-transparent bg-clip-text bg-gradient-to-r from-[#6843EC] to-[#D2FF3A] leading-none md:text-[90px] lg:text-[120px] ${outfit.className}`}
                >
                  5000+
                </h3>
                <p className="uppercase text-[#C4C4C4]">Images Render</p>
              </div>
              <div className="flex flex-col w-fit">
                <h3
                  className={`text-[70px] text-transparent bg-clip-text bg-gradient-to-r from-[#6843EC] to-[#D2FF3A] leading-none md:text-[90px] lg:text-[120px] ${outfit.className}`}
                >
                  300+
                </h3>
                <p className="uppercase text-[#C4C4C4]">Projects</p>
              </div>
              <div className="flex flex-col w-fit">
                <h3
                  className={`text-[70px] text-transparent bg-clip-text bg-gradient-to-r from-[#6843EC] to-[#D2FF3A] leading-none md:text-[90px] lg:text-[120px] ${outfit.className}`}
                >
                  1000+
                </h3>
                <p className="uppercase text-[#C4C4C4]">Topics</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

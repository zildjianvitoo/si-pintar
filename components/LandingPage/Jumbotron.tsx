"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import AOS from "aos";
import { darkerGrotesque } from "@/public/fonts";

export default function Jumbotron() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <section className="py-14">
      <div className="container h-full">
        <div className="flex flex-col items-center gap-y-12 gap-x-14 lg:gap-x-10 md:flex-row">
          <div className="flex flex-col">
            <h1
              className={`text-[40px] lg:text-[62px] xl:text-[80px] font-semibold leading-normal sm:leading-tight ${darkerGrotesque.className} text-white max-w-3xl`}
              data-aos="fade-right"
            >
              Manfaatkan Alat Kecerdasan Buatan untuk Menghasilkan Gambar Alami
            </h1>
          </div>

          <div className="relative mt-4 sm:mt-0">
            <figure data-aos="zoom-in">
              <Image
                src={"/assets/images/landingpage-jumbotron.png"}
                alt="Jumbotron Image"
                width={500}
                height={550}
                quality={100}
                priority={true}
              />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}

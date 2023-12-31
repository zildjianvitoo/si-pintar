"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { darkerGrotesque } from "@/public/fonts";
import Image from "next/image";

type Props = {};

export default function ImageSlider({}: Props) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 2.5,

    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: true,
        },
      },
    ],
  };

  return (
    <section className="py-14">
      <div className="flex flex-col ">
        <div className="container">
          {" "}
          <h3
            className={`${darkerGrotesque.className} font-semibold text-[35px] md:text-[46px]`}
          >
            Perjalanan Komunitas Kami
          </h3>
        </div>

        <Slider {...settings} className="flex mt-8 gap-12 w-full h-[500px]">
          <figure className="w-[95%] mx-auto outline-none">
            <Image
              src="/assets/images/image-slider1.png"
              alt="Image slider 1 "
              width={600}
              height={500}
              quality={100}
              className="w-[95%] mx-auto"
            />
          </figure>
          <div className="grid grid-cols-1 gap-5 w-[95%] mx-auto outline-none">
            <figure className="">
              <Image
                src="/assets/images/image-slider2.png"
                alt="Image slider 1 "
                width={250}
                height={250}
                className="max-h-[250px] w-[95%] mx-auto"
                quality={100}
              />
            </figure>
            <div className="hidden w-[95%] xl:flex items-center mt-3 py-7 flex-col bg-[#19161C] mx-auto">
              <h4 className="text-[#D2FF3A] font-medium text-[32px] md:text-[40px]">
                48,000
              </h4>
              <p className="text-center uppercase ">
                Gambar digenerate oleh Kecerdasan buatan
              </p>
            </div>
          </div>
          <figure className="w-[300px] h-[300px] mx-auto outline-none">
            <Image
              src="/assets/images/image-slider1.png"
              alt="Image slider 1 "
              width={600}
              height={500}
              className="w-[95%] object-cover mx-auto"
              quality={100}
            />
          </figure>
          <div className="grid grid-cols-1 gap-5 w-[95%] mx-auto outline-none">
            <div className="hidden w-[95%] xl:flex items-center  py-7 flex-col bg-[#19161C] mx-auto">
              <h4 className="text-[#D2FF3A] font-medium text-[32px] md:text-[40px]">
                1,075
              </h4>
              <p className="uppercase ">Kunjungan Setiap Harinya</p>
            </div>
            <Image
              src="/assets/images/image-slider4.png"
              alt="Image slider 1 "
              width={250}
              height={300}
              className="max-h-[250px] w-[95%] mx-auto mt-3"
              quality={100}
            />
          </div>
          <figure className="w-[95%] mx-auto outline-none">
            <Image
              src="/assets/images/image-slider5.png"
              alt="Image slider 1 "
              width={600}
              height={500}
              quality={100}
              className="w-[95%] mx-auto"
            />
          </figure>
        </Slider>
      </div>
    </section>
  );
}

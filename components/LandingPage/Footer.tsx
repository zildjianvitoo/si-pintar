import { darkerGrotesque, turretRoad } from "@/public/fonts";
import { Github, Twitter, Linkedin, Instagram } from "lucide-react";

type Props = {};

export default function Footer({}: Props) {
  return (
    <footer className=" bg-[#0F0F0F] py-12 lg:py-20">
      <div className="container">
        <div className="flex flex-col justify-between gap-y-7 md:flex-row">
          <div className="flex flex-col">
            <h3
              className={`${turretRoad.className} font-bold text-[25px] md:text-[36px]`}
            >
              SiPintar
            </h3>
            <p className="mt-1">Dikelola oleh Tim Pake Nanya</p>
            <div className="flex gap-2 mt-3">
              <Github className="text-lg transition-all cursor-pointer hover:-translate-y-1" />
              <Twitter className="text-lg transition-all cursor-pointer hover:-translate-y-1" />
              <Linkedin className="text-lg transition-all cursor-pointer hover:-translate-y-1" />
              <Instagram className="text-lg transition-all cursor-pointer hover:-translate-y-1" />
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-y-7 gap-x-8 lg:gap-x-14 xl:gap-x-20">
            <div className="flex flex-col">
              <p className={`${darkerGrotesque.className} font-bold text-lg`}>
                Ether
              </p>
              <a className="text-[#848895] mt-3 lg:mt-4 text-[15px] cursor-pointer">
                Donasi
              </a>
              <a className="text-[#848895] mt-2 lg:mt-3 text-[15px] cursor-pointer">
                Generator
              </a>
              <a className="text-[#848895] mt-2 lg:mt-3 text-[15px] cursor-pointer">
                Karir
              </a>
              <a className="text-[#848895] mt-2 lg:mt-3 text-[15px] cursor-pointer">
                Pemberitahuan
              </a>
            </div>
            <div className="flex flex-col">
              <p className={`${darkerGrotesque.className} font-bold text-lg`}>
                Mari Terhubung
              </p>
              <a className="text-[#848895] mt-3 lg:mt-4 text-[15px] cursor-pointer">
                Layanan
              </a>
              <a className="text-[#848895] mt-2 lg:mt-3 text-[15px] cursor-pointer">
                Blog
              </a>
              <a className="text-[#848895] mt-2 lg:mt-3 text-[15px] cursor-pointer">
                Berita
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

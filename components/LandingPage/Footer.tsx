import { darkerGrotesque, turretRoad } from "@/public/fonts";
import {
  AiFillGithub,
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillInstagram,
} from "react-icons/ai";

type Props = {};

export default function Footer({}: Props) {
  return (
    <footer className=" bg-[#0F0F0F] py-12 lg:py-20">
      <div className="container">
        <div className="flex flex-col gap-y-7 md:flex-row justify-between">
          <div className="flex flex-col">
            <h3
              className={`${turretRoad.className} font-bold text-[25px] md:text-[36px]`}
            >
              SiPintar
            </h3>
            <p className="mt-1">Managed by Artificial Intelligence</p>
            <div className="flex gap-2 mt-3">
              <AiFillGithub className="text-2xl hover:-translate-y-1 transition-all cursor-pointer" />
              <AiFillTwitterCircle className="text-2xl hover:-translate-y-1 transition-all cursor-pointer" />
              <AiFillLinkedin className="text-2xl hover:-translate-y-1 transition-all cursor-pointer" />
              <AiFillInstagram className="text-2xl hover:-translate-y-1 transition-all cursor-pointer" />
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-y-7 gap-x-8 lg:gap-x-14 xl:gap-x-20">
            <div className="flex flex-col">
              <p className={`${darkerGrotesque.className} font-bold text-lg`}>
                Ether
              </p>
              <a className="text-[#848895] mt-3 lg:mt-4 text-[15px] cursor-pointer">
                Grants
              </a>
              <a className="text-[#848895] mt-2 lg:mt-3 text-[15px] cursor-pointer">
                Generator
              </a>
              <a className="text-[#848895] mt-2 lg:mt-3 text-[15px] cursor-pointer">
                Careers
              </a>
              <a className="text-[#848895] mt-2 lg:mt-3 text-[15px] cursor-pointer">
                Disclaimer
              </a>
            </div>
            <div className="flex flex-col">
              <p className={`${darkerGrotesque.className} font-bold text-lg`}>
                Get Connected
              </p>
              <a className="text-[#848895] mt-3 lg:mt-4 text-[15px] cursor-pointer">
                Services
              </a>
              <a className="text-[#848895] mt-2 lg:mt-3 text-[15px] cursor-pointer">
                Blog
              </a>
              <a className="text-[#848895] mt-2 lg:mt-3 text-[15px] cursor-pointer">
                Newsletter
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

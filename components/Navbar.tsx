"use client";
import { usePathname, useRouter } from "next/navigation";
import { BiMenu } from "react-icons/bi";
import React, { useEffect, useRef } from "react";
import { GrClose } from "react-icons/gr";
import { IoIosArrowDown } from "react-icons/io";
import { workSans } from "@/public/fonts";

const navLinks = [
  {
    path: "#belajar",
    name: "Belajar",
  },
  {
    path: "#bangun",
    name: "Buat",
  },
  {
    path: "#produk",
    name: "Produk",
  },
  {
    path: "#komunitas",
    name: "Komunitas",
  },
];

export default function Navbar() {
  const headerRef = useRef<HTMLHeadingElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current?.classList?.add("sticky-navbar");
      } else {
        headerRef.current?.classList?.remove("sticky-navbar");
      }
    });
  };

  useEffect(() => {
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  });

  const toggleMenu = () => {
    menuRef?.current?.classList.toggle("show-menu");
  };

  return (
    <header className={`flex items-center header`} ref={headerRef}>
      <div className="container text-white">
        <div className="flex items-center justify-between  relative">
          <div className="flex ">
            <h3 className={`font-semibold text-[24px] ${workSans.className}`}>
              SiPintar.
            </h3>
          </div>
          <div className="navigation" ref={menuRef} onClick={toggleMenu}>
            <ul className="flex items-center menu gap-[2.7rem]">
              <GrClose className="absolute block text-2xl top-9 right-7 lg:hidden" />

              {navLinks.map((link, index) => (
                <li key={link.path}>
                  <a
                    href={link.path}
                    className={`flex items-center gap-1 tracking-wide text-white`}
                  >
                    {link.name} <IoIosArrowDown className="mt-1" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <span className="lg:hidden" onClick={toggleMenu}>
            <BiMenu className="w-8 h-8 cursor-pointer " />
          </span>
        </div>
      </div>
    </header>
  );
}

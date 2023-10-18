"use client";
import { usePathname, useRouter } from "next/navigation";
import { Menu, X } from "lucide-react";
import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { turretRoad, workSans } from "@/public/fonts";
import { Button } from "./ui/button";
import { useClerk } from "@clerk/nextjs";
import Image from "next/image";

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

  const router = useRouter();

  const { user } = useClerk();

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
        <div className="relative flex items-center justify-between">
          <div className="flex gap-4 items-center">
            <figure className="w-12 h-12 mt-2">
              <img src={"/logo.png"} alt="Logo SiPintar" className="w-full" />
            </figure>
            <h3 className={`font-semibold text-[24px] ${turretRoad.className}`}>
              SiPintar.
            </h3>
          </div>
          <div className="navigation" ref={menuRef} onClick={toggleMenu}>
            <ul className="flex items-center menu gap-[2.7rem]">
              <X className="absolute block text-2xl top-9 right-7 !text-white fill-white lg:hidden" />

              {navLinks.map((link, index) => (
                <li key={link.path}>
                  <a
                    href={link.path}
                    className={`flex items-center gap-1 tracking-wide text-white`}
                  >
                    {link.name} <ChevronDown className="mt-1" />
                  </a>
                </li>
              ))}
              <Link href={user ? "/dashboard" : "/sign-in"}>
                <Button
                  className="px-8 tracking-wide bg-indigo-500/80 hover:bg-indigo-500/70"
                  onClick={() => router.push("/sign-in")}
                >
                  Masuk
                </Button>
              </Link>
            </ul>
          </div>

          <span className="lg:hidden" onClick={toggleMenu}>
            <Menu className="w-8 h-8 cursor-pointer " />
          </span>
        </div>
      </div>
    </header>
  );
}

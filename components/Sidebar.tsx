"use client";
import Image from "next/image";
import Link from "next/link";
import { turretRoad } from "@/public/fonts";
import { Code, ImageIcon, LayoutDashboard, Settings } from "lucide-react";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

type Props = {};

const routes = [
  {
    name: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
    color: "text-sky-500",
  },
  {
    name: "Generate Gambar",
    icon: ImageIcon,
    href: "/dashboard/image-generator",
    color: "text-pink-700",
  },
  {
    name: "Generate Kode",
    icon: Code,
    href: "/dashboard/code-generator",
    color: "text-green-700",
  },
  {
    name: "Pengaturan",
    icon: Settings,
    href: "/dashboard/settings",
  },
];

export default function Sidebar({}: Props) {
  const pathname = usePathname();

  return (
    <section className=" space-y-4 py-4 flex flex-col h-full bg-[#111827] text-white">
      <div className="px-3 py-2 flex-1">
        <Link href={"/dashboard"} className="flex items-center pl-3 mb-14">
          <div className="relative w-8 h-8 mr-4">
            <Image fill alt="logo si pintar" src={"/logo.png"} />
          </div>
          <h1 className={`text-2xl font-bold ${turretRoad.className}`}>
            SiPintar
          </h1>
        </Link>
        <div className="space-y-2.5">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition",
                {
                  "bg-white/10 ": pathname === route.href,
                }
              )}
            >
              <div className="flex items-center flex-1">
                <route.icon className={cn("h-5 w-5 mr-3", route.color)} />{" "}
                {route.name}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

import NavbarAuth from "@/components/NavbarAuth";
import Sidebar from "@/components/Sidebar";
import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function DashboardLayout({ children }: Props) {
  return (
    <div className="h-full relative">
      <div className="hidden h-full md:flex md:w-72 md:flex-col md:fixed md:inset-y-0 z-[80] bg-gray-900">
        <Sidebar />
      </div>
      <div className="md:pl-72">
        {" "}
        <NavbarAuth />
        {children}{" "}
      </div>
    </div>
  );
}

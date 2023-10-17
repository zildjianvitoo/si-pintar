import NavbarAuth from "@/components/NavbarAuth";
import Sidebar from "@/components/Sidebar";
import { getApiLimitCount } from "@/lib/apiLimit";
import { outfit } from "@/public/fonts";
import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default async function DashboardLayout({ children }: Props) {
  const apiLimitCount = await getApiLimitCount();

  return (
    <div className="h-full relative">
      <div className="hidden h-full md:flex md:w-72 md:flex-col md:fixed md:inset-y-0  bg-gray-900">
        <Sidebar apiLimitCount={apiLimitCount} />
      </div>
      <div className={`md:pl-72 ${outfit.className}`}>
        {" "}
        <NavbarAuth />
        {children}{" "}
      </div>
    </div>
  );
}

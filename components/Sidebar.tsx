"use client";

import Link from "next/link";

type Props = {};

export default function Sidebar({}: Props) {
  return (
    <section className=" space-y-4 py-4 flex flex-col h-full bg-[#1111827] text-white">
      <div className="px-3 py-2 flex-1">
        <Link href={"/dashboard"}>Logo</Link>
      </div>
    </section>
  );
}

"use client";

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ArrowRight, Code, ImageIcon } from "lucide-react";
import { useRouter } from "next/navigation";

const tools = [
  {
    name: "Generate Gambar",
    icon: ImageIcon,
    href: "/dashboard/image-generator",
    color: "text-pink-700",
    bgColor: "bg-[#FFC3DE]",
  },
  {
    name: "Generate Kode",
    icon: Code,
    href: "/dashboard/code-generator",
    color: "text-green-700",
    bgColor: "bg-[#D8FFF7]",
  },
];

function DashboardPage() {
  const router = useRouter();

  return (
    <main>
      <div className="mb-8 space-y-4">
        <h2 className="text-2xl font-bold text-center md:text-4xl">
          Explore the power of AI
        </h2>
        <p className="text-sm font-medium text-center text-black/60 md:text-lg">
          Chat with the smartest AI - Experience the power of AI
        </p>
      </div>
      <div className="px-4 space-y-4 md:px-20 lg:px-32">
        {tools.map((tool) => (
          <Card
            key={tool.href}
            className="flex items-center justify-between p-4 transition cursor-pointer border-black/30 hover:shadow-md"
            onClick={() => router.push(tool.href)}
          >
            <div className="flex items-center gap-x-4">
              <div className={cn("p-2 w-fit rounded-md", tool.bgColor)}>
                <tool.icon className={cn("w-8 h-8", tool.color)} />
              </div>
              <div className="font-semibold">{tool.name}</div>
            </div>
            <ArrowRight className="w-5 h-5" />
          </Card>
        ))}
      </div>
    </main>
  );
}

export default DashboardPage;

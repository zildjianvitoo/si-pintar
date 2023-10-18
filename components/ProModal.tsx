"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { Badge } from "./ui/badge";
import { useProModal } from "@/hooks/useProModal";
import { Check, Code, ImageIcon, Zap } from "lucide-react";
import { Card } from "./ui/card";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { axiosInstance } from "@/lib/axiosInstance";
import { useState } from "react";

const tools = [
  {
    name: "Generate Gambar",
    icon: ImageIcon,
    color: "text-pink-700",
    bgColor: "bg-[#FFC3DE]",
  },
  {
    name: "Generate Kode",
    icon: Code,
    color: "text-green-700",
    bgColor: "bg-[#D8FFF7]",
  },
];

export default function ProModal() {
  const { isOpen, onClose } = useProModal();
  const [loading, setLoading] = useState(false);

  const onSubscribe = async () => {
    try {
      setLoading(true);
      const { data } = await axiosInstance.get("/api/stripe");
      window.location.href = data.url;
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="flex justify-center items-center flex-col gap-y-4 pb-2">
              <div className="flex items-center gap-x-2 font-bold py-1">
                <h3 className="tracking-[0.010rem]">Berlangganan SiPintar</h3>
                <Badge
                  className="uppercase text-sm px-3 py-1"
                  variant={"premium"}
                >
                  pro
                </Badge>
              </div>
            </DialogTitle>
            <DialogDescription className="text-center pt-2 space-y-3 text-zinc-900 font-medium">
              {tools.map((tool) => (
                <Card
                  key={tool.name}
                  className="p-3 border-black/5 flex items-center justify-between"
                >
                  <div className="flex items-center gap-x-4 ">
                    <div className={cn("p-2 w-fit rounded-md", tool.bgColor)}>
                      <tool.icon className={cn("w-6 h-6", tool.color)} />
                    </div>
                    <p className=" font-semibold text-sm">{tool.name}</p>
                  </div>
                  <Check className="text-pink-500 w-5 h-5" />
                </Card>
              ))}
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button
              size={"lg"}
              variant={"premium"}
              className=" w-full"
              disabled={loading}
              onClick={onSubscribe}
            >
              Berlangganan <Zap className="w-4 h-4 ml-2 fill-white" />
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

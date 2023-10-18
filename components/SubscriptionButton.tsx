"use client";

import { Zap } from "lucide-react";
import { Button } from "./ui/button";
import { axiosInstance } from "@/lib/axiosInstance";
import { useState } from "react";
import toast from "react-hot-toast";

type Props = {
  isPro: boolean;
};

export default function SubscriptionButton({ isPro = false }: Props) {
  const [loading, setLoading] = useState(false);

  const onClick = async () => {
    try {
      setLoading(true);
      const { data } = await axiosInstance.get("/api/stripe");
      window.location.href = data.url;
    } catch (error) {
      toast.error("Terjadi kesalahan");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Button
      variant={isPro ? "default" : "premium"}
      className={isPro ? "bg-pink-500 hover:bg-pink-400" : ""}
      onClick={onClick}
      disabled={loading}
    >
      {isPro ? "Kelola Langganan" : "Berlangganan"}{" "}
      {!isPro && <Zap className="w-4 h-4 ml-2 fill-white" />}
    </Button>
  );
}

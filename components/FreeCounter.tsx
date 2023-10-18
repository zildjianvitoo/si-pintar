"use client";

import { MAX_FREE_COUNTS } from "@/lib/constant";
import { Card, CardContent } from "./ui/card";
import { Progress } from "./ui/progress";
import { Button } from "./ui/button";
import { Zap } from "lucide-react";
import { useProModal } from "@/hooks/useProModal";

type Props = { apiLimitCount: number; isPro: boolean };

export default function FreeCounter({
  apiLimitCount = 0,
  isPro = false,
}: Props) {
  const { onOpen } = useProModal();

  if (isPro) {
    return null;
  }
  return (
    <div className="px-3">
      <Card className="bg-white/10 border-0">
        <CardContent className="py-6">
          <div className="text-center text-sm text-white mb-4 space-y-2">
            <p>
              {apiLimitCount} / {MAX_FREE_COUNTS} Percobaan gratis
            </p>
            <Progress
              className="h-3 "
              value={(apiLimitCount / MAX_FREE_COUNTS) * 100}
            />
          </div>
          <Button className="w-full" variant={"premium"} onClick={onOpen}>
            Berlangganan <Zap className="w-4 h-4 ml-2 fill-white" />
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}

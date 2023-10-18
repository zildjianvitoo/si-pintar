"use client";
import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import Sidebar from "./Sidebar";
import NoSSR from "./NoSSR";

type Props = { apiLimitCount: number; isPro: boolean };

export default function MobileSidebar({ apiLimitCount, isPro }: Props) {
  return (
    <NoSSR>
      <Sheet>
        <SheetTrigger>
          <Button variant={"ghost"} size={"icon"} className="md:hidden">
            <Menu />
          </Button>
        </SheetTrigger>
        <SheetContent side={"left"} className="p-0">
          <Sidebar isPro={isPro} apiLimitCount={apiLimitCount} />
        </SheetContent>
      </Sheet>
    </NoSSR>
  );
}

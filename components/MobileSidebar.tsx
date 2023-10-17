"use client";
import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import Sidebar from "./Sidebar";
import NoSSR from "./NoSSR";

type Props = { apiLimitCount: number };

export default function MobileSidebar({ apiLimitCount }: Props) {
  return (
    <NoSSR>
      <Sheet>
        <SheetTrigger>
          <Button variant={"ghost"} size={"icon"} className="md:hidden">
            <Menu />
          </Button>
        </SheetTrigger>
        <SheetContent side={"left"} className="p-0">
          <Sidebar apiLimitCount={apiLimitCount} />
        </SheetContent>
      </Sheet>
    </NoSSR>
  );
}

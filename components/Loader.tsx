import React from "react";
import { Skeleton } from "./ui/skeleton";

type Props = {};

export default function Loader({}: Props) {
  return (
    <div className="flex flex-col gap-3 ">
      <div className="flex items-center gap-5 p-6 border rounded-lg bg-muted ">
        <Skeleton className="w-12 h-12 bg-white rounded-full" />
        <div className="flex flex-col w-full gap-2">
          <Skeleton className="w-[45%] h-6 bg-white rounded-full" />
          <Skeleton className="w-[45%] h-6 bg-white rounded-full" />
        </div>
      </div>
      <div className="flex items-center gap-5 p-6 bg-white border rounded-lg border-black/10">
        <Skeleton className="w-12 h-12 rounded-full bg-muted" />
        <Skeleton className="h-6 w-[35%] bg-muted rounded-full " />
      </div>
    </div>
  );
}

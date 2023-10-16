import React from "react";
import { Skeleton } from "./ui/skeleton";

type Props = {
  imageGeneration?: boolean;
  amountImage?: number;
};

export default function Loader({ imageGeneration, amountImage }: Props) {
  const imageAmount = Array.from(Array(amountImage).keys());

  if (imageGeneration) {
    return (
      <div className="grid grid-cols-1 gap-4 mt-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {imageAmount.map((amount, index) => (
          <Skeleton key={index} className="overflow-hidden rounded-lg">
            <div className="relative aspect-square">
              <Skeleton className="w-[150px] h-[150px]" />
            </div>
          </Skeleton>
        ))}
      </div>
    );
  }

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

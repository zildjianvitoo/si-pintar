import React from "react";

type Props = {
  label: string;
};

export function Empty({ label }: Props) {
  return (
    <div className="h-full p-20 flex flex-col items-center justify-center">
      <div className="relative h-72 w-72">
        <p className="">{label}</p>
      </div>
    </div>
  );
}

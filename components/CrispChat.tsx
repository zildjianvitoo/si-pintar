"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";
type Props = {};

export default function CrispChat({}: Props) {
  useEffect(() => {
    Crisp.configure("fbdcb9a1-4ad4-4db0-a8e6-0d3293b5dd41");
  }, []);

  return null;
}

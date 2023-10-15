"use client";

import { Fragment, ReactNode, useEffect, useState } from "react";

type Props = { children: ReactNode };

export default function NoSSR({ children }: Props) {
  const [isSSR, setIsSSR] = useState(true);

  useEffect(() => {
    setIsSSR(false);
  }, []);

  return isSSR ? null : <Fragment>{children}</Fragment>;
}

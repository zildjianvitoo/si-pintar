"use client";

import NoSSR from "../NoSSR";
import ProModal from "../ProModal";

type Props = {};

export default function ModalProvider({}: Props) {
  return (
    <NoSSR>
      <ProModal />
    </NoSSR>
  );
}

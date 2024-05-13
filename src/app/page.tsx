"use client";
import BackgroundController from "@/components/back-controller";
import Buttons from "@/components/buttons-control";
import Header from "@/components/header";
import IconController from "@/components/icon-controller";
import MaxWidth from "@/components/max-width";
import Preview from "@/components/preview";
import { useState } from "react";

export default function Home() {
  const [active, setActive] = useState(0);
  return (
    <MaxWidth className="overflow-hidden">
      <Header />

      <main className="flex ">
        <Buttons setActive={setActive} active={active} />
        <>{active === 0 ? <IconController /> : <BackgroundController />}</>
        <Preview />
      </main>
    </MaxWidth>
  );
}

"use client";
import BackgroundController from "@/components/back-controller";
import Buttons from "@/components/buttons-control";
import Header from "@/components/header";
import IconController from "@/components/icon-controller";
import MaxWidth from "@/components/max-width";
import Preview from "@/components/preview";
import { UpdateStorageContext } from "@/context/update-storage-context";
import { useState } from "react";

export default function Home() {
  const [active, setActive] = useState(0);
  const [updateStorage, setUpdateStorage] = useState({});
  return (
    <UpdateStorageContext.Provider value={{ updateStorage, setUpdateStorage }}>
      <MaxWidth className="overflow-hidden">
        <Header />

        <main className="flex">
          <div className="w-64 fixed">
            <Buttons setActive={setActive} active={active} />
          </div>
          <div className="ml-64 overflow-y-hidden flex-1 flex">
            <div className="w-3/12 fixed">
              {active === 0 ? <IconController /> : <BackgroundController />}
            </div>
            <div className="w-10/12 ml-52 fixed overflow-hidden px-4">
              <Preview />
            </div>
          </div>
        </main>
      </MaxWidth>
    </UpdateStorageContext.Provider>
  );
}

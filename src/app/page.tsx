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
  const [downloadIcon, setDownloadIcon] = useState();
  return (
    <UpdateStorageContext.Provider value={{ updateStorage, setUpdateStorage }}>
      <MaxWidth className="overflow-hidden">
        <Header DownloadIcon={setDownloadIcon} />

        <main className="flex mt-16">
          <div className="w-64 fixed">
            <Buttons setActive={setActive} active={active} />
          </div>
          <div className="ml-64  flex-1 flex">
            <div className="w-4/12 mb-16 overflow-y-auto">
              {active === 0 ? <IconController /> : <BackgroundController />}
            </div>
            <div className="w-8/12 px-4 ">
              <Preview downloadIcon={downloadIcon} />
            </div>
          </div>
        </main>
      </MaxWidth>
    </UpdateStorageContext.Provider>
  );
}

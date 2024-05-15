import { Slider } from "./ui/slider";
import ColorsPicker from "./color-picker";
import { useContext, useEffect, useState } from "react";
import { UpdateStorageContext } from "@/context/update-storage-context";

const BackGroundController = () => {
  //@ts-ignore
  const storageValue = JSON.parse(localStorage.getItem("value"));
  const [rounded, setRounded] = useState(
    storageValue ? storageValue?.bgRounded : 0
  );
  const [padding, setPadding] = useState(
    storageValue ? storageValue?.bgPadding : 0
  );
  const [color, setColor] = useState(
    storageValue ? storageValue?.bgColor : "#000"
  );

  //@ts-ignore
  const { updateStorage, setUpdateStorage } = useContext(UpdateStorageContext);

  useEffect(() => {
    const updatedValue = {
      ...storageValue,
      bgRounded: rounded,
      bgPadding: padding,
      bgColor: color,
    };

    setUpdateStorage(updatedValue);
    localStorage.setItem("value", JSON.stringify(updatedValue));
  }, [rounded, padding, color]);

  return (
    <div className="w-full border-r p-3 flex flex-col space-y-5 overflow-auto h-screen pb-4">
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <p className="text-sm">Rounded</p>
          <p className="text-xs">{rounded} px</p>
        </div>

        <Slider
          defaultValue={[rounded]}
          max={300}
          step={1}
          onValueChange={(e) => setRounded(e[0])}
        />
      </div>
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <p className="text-sm">Padding</p>
          <p className="text-xs">{padding}°</p>
        </div>

        <Slider
          defaultValue={[padding]}
          max={100}
          step={1}
          onValueChange={(e) => setPadding(e[0])}
        />
      </div>

      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <p className="text-sm">Background Color</p>
        </div>
        <div className="">
          <ColorsPicker selectedColor={(color) => setColor(color)} />
        </div>
      </div>
      <div className="my-8"></div>
    </div>
  );
};

export default BackGroundController;

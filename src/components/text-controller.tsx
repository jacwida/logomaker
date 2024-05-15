import { Slider } from "./ui/slider";
import ColorsPicker from "./color-picker";
import { useContext, useEffect, useState } from "react";
import { UpdateStorageContext } from "@/context/update-storage-context";
import { Input } from "./ui/input";

const TextController = () => {
  //@ts-ignore
  const storageValue = JSON.parse(localStorage.getItem("value"));
  const [size, setSize] = useState(storageValue ? storageValue?.textSize : 20);

  const [color, setColor] = useState(
    storageValue ? storageValue?.textColor : "#fff"
  );

  const [text, setText] = useState(storageValue ? storageValue?.text : "");

  //@ts-ignore
  const { updateStorage, setUpdateStorage } = useContext(UpdateStorageContext);

  useEffect(() => {
    const updatedValue = {
      ...storageValue,
      textSize: size,
      textColor: color,
      text: text,
    };

    setUpdateStorage(updatedValue);
    localStorage.setItem("value", JSON.stringify(updatedValue));
  }, [size, color, text]);

  return (
    <div className="w-full border-r p-3 flex flex-col gap-8 overflow-auto h-screen">
      <div className="">
        <p className="text-sm my-1">Text</p>
        <div className="font-semibold">{text ? text : "your text preview"}</div>
      </div>

      <div className="space-y-2">
        <p className="text-sm">Input Text</p>

        <Input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <p className="text-sm">Size</p>
          <p className="text-xs">{size} px</p>
        </div>

        <Slider
          defaultValue={[size]}
          max={500}
          step={1}
          onValueChange={(e) => setSize(e[0])}
        />
      </div>

      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <p className="text-sm">Border Color</p>
        </div>
        <div className="">
          <ColorsPicker
            hiddenController
            selectedColor={(color) => setColor(color)}
            hideEyeDrop
            hidePreset
          />
        </div>
      </div>

      <div className="my-8"></div>
    </div>
  );
};

export default TextController;

import { UpdateStorageContext } from "@/context/update-storage-context";
import { icons } from "lucide-react";
import { useContext, useEffect, useState } from "react";

const Preview = () => {
  const [storageValue, setStorageValue] = useState();

  //@ts-ignore
  const { updateStorage, setUpdateStorage } = useContext(UpdateStorageContext);

  useEffect(() => {
    //@ts-ignore
    const storageDate = JSON.parse(localStorage.getItem("value"));
    setStorageValue(storageDate);
  }, [updateStorage]);

  const Icon = ({
    name,
    color,
    size,
  }: {
    name: string;
    color: string;
    size: number;
  }) => {
    //@ts-ignore
    const LucidIcon = icons[name];

    if (!LucidIcon) {
      console.error(`Icon "${name}" not found.`);
      return null; // or provide a default icon
    }

    return <LucidIcon color={color} size={size} />;
  };

  return (
    <div className="w-full p-3 h-screen flex justify-center items-center">
      <div
        className="w-[600px]  h-[600px] bg-slate-100 border-dashed border"
        style={{
          //@ts-ignore
          padding: storageValue?.bgPadding,
        }}
      >
        <div
          className="w-full h-full flex items-center justify-center"
          style={{
            //@ts-ignore
            background: storageValue?.bgColor,
            //@ts-ignore
            borderRadius: storageValue?.bgRounded,
          }}
        >
          {/* //@ts-ignore */}
          <Icon
            //@ts-ignore
            color={storageValue?.iconFillColor}
            //@ts-ignore
            name={storageValue?.icon}
            //@ts-ignore
            size={storageValue?.iconSize}
          />
        </div>
      </div>
    </div>
  );
};

export default Preview;

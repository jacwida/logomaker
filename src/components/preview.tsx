import { UpdateStorageContext } from "@/context/update-storage-context";
import html2canvas from "html2canvas";
import { icons } from "lucide-react";
import { useContext, useEffect, useState } from "react";
import ReactDOMServer from "react-dom/server";

interface PreviewProps {
  downloadIcon?: any;
}

const Preview: React.FC<PreviewProps> = ({ downloadIcon }) => {
  const [storageValue, setStorageValue] = useState();

  //@ts-ignore
  const { updateStorage, setUpdateStorage } = useContext(UpdateStorageContext);

  useEffect(() => {
    //@ts-ignore
    const storageDate = JSON.parse(localStorage.getItem("value"));
    setStorageValue(storageDate);
  }, [updateStorage]);

  useEffect(() => {
    if (downloadIcon) {
      downloadPng();
      downloadSvg();
    }
  }, [downloadIcon]);

  const downloadPng = () => {
    const downloadlogodiv = document.getElementById("downloadlogodiv");

    //@ts-ignore
    html2canvas(downloadlogodiv, {
      backgroundColor: null,
    }).then((canvas) => {
      const pngimage = canvas.toDataURL("image/png");
      const downloadLink = document.createElement("a");
      downloadLink.href = pngimage;
      downloadLink.download = "icon.png";
      downloadLink.click();
    });
  };

  const downloadSvg = () => {
    const downloadlogodiv = document.getElementById("downloadlogodiv");

    if (!downloadlogodiv) {
      console.error("Downloadable div not found.");
      return;
    }

    const svgElement = createSvgElementFromDiv(downloadlogodiv);

    const serializer = new XMLSerializer();
    const svgBlob = new Blob([serializer.serializeToString(svgElement)], {
      type: "image/svg+xml",
    });
    const svgUrl = URL.createObjectURL(svgBlob);
    const downloadLink = document.createElement("a");
    downloadLink.href = svgUrl;
    downloadLink.download = "icon.svg";
    downloadLink.click();
    URL.revokeObjectURL(svgUrl);
  };

  const createSvgElementFromDiv = (div) => {
    const { bgColor, bgRounded, iconFillColor, icon, iconSize, iconRotate } =
      storageValue;
    const LucidIcon = icons[icon];

    if (!LucidIcon) {
      console.error(`Icon "${icon}" not found.`);
      return null;
    }

    const iconElement = (
      <LucidIcon
        color={iconFillColor}
        size={iconSize}
        style={{ transform: `rotate(${iconRotate}deg)` }}
      />
    );

    const iconSvgString = ReactDOMServer.renderToStaticMarkup(iconElement);
    const iconSvgElement = new DOMParser().parseFromString(
      iconSvgString,
      "image/svg+xml"
    ).documentElement;

    const divRect = div.getBoundingClientRect();
    const width = divRect.width;
    const height = divRect.height;

    const svgWrapper = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "svg"
    );
    svgWrapper.setAttribute("width", width.toString());
    svgWrapper.setAttribute("height", height.toString());
    svgWrapper.setAttribute("xmlns", "http://www.w3.org/2000/svg");

    // Apply background styles
    const backgroundRect = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "rect"
    );
    backgroundRect.setAttribute("width", "100%");
    backgroundRect.setAttribute("height", "100%");
    backgroundRect.setAttribute("fill", bgColor);
    backgroundRect.setAttribute("rx", bgRounded); // For rounded corners
    backgroundRect.setAttribute("ry", bgRounded);

    svgWrapper.appendChild(backgroundRect);

    // Center the icon within the SVG
    const iconGroup = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "g"
    );
    const innerSvg = new DOMParser().parseFromString(
      `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}">
         ${iconSvgElement.outerHTML}
       </svg>`,
      "image/svg+xml"
    ).documentElement;

    iconGroup.appendChild(innerSvg);
    svgWrapper.appendChild(iconGroup);

    return svgWrapper;
  };

  const Icon = ({
    name,
    color,
    size,
    rotate,
  }: {
    name: string;
    color: string;
    size: number;
    rotate: number;
  }) => {
    //@ts-ignore
    const LucidIcon = icons[name];

    if (!LucidIcon) {
      console.error(`Icon "${name}" not found.`);
      return null; // or provide a default icon
    }

    return (
      <LucidIcon
        color={color}
        size={size}
        style={{ transform: `rotate(${rotate}deg)` }}
      />
    );
  };

  return (
    <div className="w-full p-3 h-screen flex justify-center items-center">
      <div
        className="w-[500px]  h-[500px] bg-slate-100 border-dashed border"
        style={{
          //@ts-ignore
          padding: storageValue?.bgPadding,
        }}
      >
        <div
          className="w-full h-full flex items-center justify-center"
          id="downloadlogodiv"
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
            //@ts-ignore
            rotate={storageValue?.iconRotate}
          />
        </div>
      </div>
    </div>
  );
};

export default Preview;

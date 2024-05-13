import { Activity } from "lucide-react";
import { Button } from "./ui/button";
import { Slider } from "./ui/slider";
import ColorsPicker from "./color-picker";

const IconController = () => {
  return (
    <div className="w-3/12 border-r p-3 flex flex-col space-y-5 overflow-auto ">
      <div className="flex justify-between">
        <p className="text-sm">Icon</p>
        <p className="text-sm">Activity</p>
      </div>
      <Button variant="secondary" size="icon" className="my-1 font-bold">
        <Activity className="w-4 h-4" />
      </Button>

      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <p className="text-sm">Size</p>
          <p className="text-xs">500 px</p>
        </div>

        <Slider defaultValue={[33]} max={100} step={1} />
      </div>
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <p className="text-sm">Rotate</p>
          <p className="text-xs">90°</p>
        </div>

        <Slider defaultValue={[90]} max={360} step={1} />
      </div>
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <p className="text-sm">Border width</p>
          <p className="text-xs">2px</p>
        </div>

        <Slider defaultValue={[2]} max={10} step={1} />
      </div>

      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <p className="text-sm">Border Color</p>
        </div>
        <div className="overflow-hidden w-full">
          <ColorsPicker />
        </div>
      </div>
    </div>
  );
};

export default IconController;

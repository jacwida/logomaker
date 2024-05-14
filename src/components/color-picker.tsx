import { useState } from "react";
import ColorPicker from "react-best-gradient-color-picker";

interface ColorsPickerProps {
  hiddenController?: boolean;
  selectedColor: (e: string) => void;
  hideEyeDrop?: boolean;
  hidePreset?: boolean;
}
const ColorsPicker: React.FC<ColorsPickerProps> = ({
  hiddenController = false,
  selectedColor,
  hideEyeDrop = false,
  hidePreset = false,
}) => {
  const [color, setColor] = useState("rgba(255,255,255,1)");
  return (
    <ColorPicker
      value={color}
      onChange={(e) => {
        setColor(e);
        selectedColor(e);
      }}
      hideEyeDrop={hideEyeDrop}
      hidePresets={hidePreset}
      hideControls={hiddenController}
    />
  );
};

export default ColorsPicker;

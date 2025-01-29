import { useState } from "react";

const colors = [
  { id: 1, color: "#667085" },
  { id: 2, color: "#000000" },
  { id: 3, color: "#ffb800" },
  { id: 4, color: "#ff0b37" },
  { id: 5, color: "#6b38fb" },
];

function Colors() {
  const [selectedColor, setSelectedColor] = useState(1); // Default selected color

  return (
    <div className="flex gap-3 items-center justify-center">
      {colors.map((item) => (
        <div
          key={item.id}
          className="relative flex items-center justify-center w-8 h-8"
          onClick={() => setSelectedColor(item.id)}
        >
          {/* Selection Ring */}
          {selectedColor === item.id && (
            <div
              className="absolute w-8 h-8 rounded-full border-2 "
              style={{ borderColor: item.color }}
            ></div>
          )}
          {/* Color Circle */}
          <div
            className="w-6 h-6 rounded-full"
            style={{ backgroundColor: item.color }}
          ></div>
        </div>
      ))}
    </div>
  );
}

export default Colors;

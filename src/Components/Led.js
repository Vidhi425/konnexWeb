import React, { useState } from "react";

const LedControls = () => {
  const [color, setColor] = useState("red");

  function handleColorChange(event) {
    setColor(event.target.value);
  }

  return (
    <div className="flex flex-col border-2 h-screen w-1/3 font-bold text-4xl justify-center items-center space-y-6">
      <h1>LED Controls</h1>

      <div
        className="led-bulb w-16 h-16 rounded-full"
        style={{ backgroundColor: color }}
      ></div>

      <select
        value={color}
        onChange={handleColorChange}
        className="bg-white text-black px-2 py-1 rounded-md"
      >
        <option value="#fffff">Red</option>
        <option value="green">Green</option>
        <option value="blue">Blue</option>
        <option value="yellow">Yellow</option>
        <option value="purple">Purple</option>
      </select>
    </div>
  );
};

export default LedControls;

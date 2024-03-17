import React, { useState } from "react";

const BulbControls = () => {
  const [powerOn, setPowerOn] = useState(false);

  const togglePower = () => {
    setPowerOn((prevPower) => !prevPower);
  };

  const bulbImageUrl = powerOn
    ? "./images/light-bulb (1).png"
    : "./images/light-bulb.png";

  return (
    <div className="flex flex-col border-2 h-[100vh] w-[30%] justify-center items-center space-y-6">
      <h1 className="font-bold text-4xl">Bulb Controls</h1>

      <img src={bulbImageUrl} alt="Bulb" className="h-15 w-15"></img>
      <img
        src="./images/power.svg"
        alt="Power"
        className="h-40 w-14 cursor-pointer"
        onClick={togglePower}
      ></img>
    </div>
  );
};

export default BulbControls;

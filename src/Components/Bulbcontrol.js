import React from "react";
import { useState } from "react";
const BulbControls = () => {

  return (
    <div className="flex flex-col border-2 h-[100vh] w-[30%] justify-center items-center space-y-6">
      <h1 className="font-bold text-4xl">Bulb Controls</h1>

      <img src="./images/light-bulb.png" className="h-15 w-15"></img>
      <img src="./images/power.svg"  className="h-14 w-14"></img>
    </div>
  );
};

export default BulbControls;

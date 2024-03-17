import React from "react";
import Card from "./Card";
const CardSection = ({ setDevice }) => {
  return (
    <div className="h-screen w-[65%] flex flex-col items-center justify-around p-6 ">
      <div
        onClick={() => setDevice("fan")}
        className="h-[40vh] w-full flex justify-evenly items-center"
      >
        <div className="w-[15rem] h-[12rem] p-6 flex flex-col items-start justify-start gap-3 font-semibold border-2 border-[#DCDCE7] hover:border-[#1F3DD9] rounded-2xl cursor-pointer trasnition-[border]">
          <h2 className="text-[#081245] text-3xl">Fan</h2>
          <p className="text-[#A4A4A4] text-sm">Control the speed of the fan</p>
        </div>
        <div
          onClick={() => setDevice("bulb")}
          className="w-[15rem] h-[12rem] p-6 flex flex-col items-start justify-start gap-3 font-semibold border-2 border-[#DCDCE7] hover:border-[#1F3DD9] rounded-2xl cursor-pointer trasnition-[border]"
        >
          <h2 className="text-[#081245] text-3xl">Bulb</h2>
          <p className="text-[#A4A4A4] text-sm">Turn on or off the bulb</p>
        </div>
      </div>
      <div className="h-[40vh] w-full flex justify-evenly items-center">
        <div
          onClick={() => setDevice("led")}
          className="w-[15rem] h-[12rem] p-6 flex flex-col items-start justify-start gap-3 font-semibold border-2 border-[#DCDCE7] hover:border-[#1F3DD9] rounded-2xl cursor-pointer trasnition-[border]"
        >
          <h2 className="text-[#081245] text-3xl">Led</h2>
          <p className="text-[#A4A4A4] text-sm">Control the color of the led</p>
        </div>
        <div
          onClick={() => setDevice("ac")}
          className="w-[15rem] h-[12rem] p-6 flex flex-col items-start justify-start gap-3 font-semibold border-2 border-[#DCDCE7] hover:border-[#1F3DD9] rounded-2xl cursor-pointer trasnition-[border]"
        >
          <h2 className="text-[#081245] text-3xl">Air conditioner</h2>
          <p className="text-[#A4A4A4] text-sm">Control state & temp of Ac</p>
        </div>
      </div>
    </div>
  );
};

export default CardSection;

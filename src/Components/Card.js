import React from "react";

const Card = () => {
  return (
    <div className="w-[15rem] h-[12rem] p-6 flex flex-col items-start justify-start gap-3 font-semibold border-2 border-[#DCDCE7] hover:border-[#1F3DD9] rounded-2xl cursor-pointer trasnition-[border]">
      <h2 className="text-[#081245] text-3xl">Fan</h2>
      <p className="text-[#A4A4A4] text-sm">Control the speed of the fan</p>
    </div>
  );
};

export default Card;

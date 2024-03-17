import React from "react";
import Card from "./Card";
const CardSection = () => {
  return (
    <div className="h-screen w-[65%] flex flex-col items-center justify-around p-6 ">
      <div className="h-[40vh] w-full flex justify-evenly items-center">
        <Card />
        <Card />
      </div>
      <div className="h-[40vh] w-full flex justify-evenly items-center">
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default CardSection;

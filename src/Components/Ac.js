import React from "react";
import { useState } from "react";
const AcControls = () => {
  const [count, setCount] = useState(16);
  function decreaseHandler() {
    setCount(count < 17 ? 16 : count - 1);
  }

  function increaseHandler() {
    setCount(count > 29 ? 30 : count + 1);
  }

  function resetHandler() {
    setCount(0);
  }
  return (
    <div className="flex flex-col font-bold text-4xl border-2 h-[100vh] w-[30%] justify-center items-center space-y-6">
      <h1>Ac Controls</h1>

      <img src="./images/air-conditioner (2).png" className="h-15 w-15"></img>
      <div className="bg-white flex  gap-12 py-3 rounded-sm text-[25px] text-[#344151]">
        <button
          onClick={decreaseHandler}
          className="border-r-2 text-center w-20 border-[#bfbfbf]  text-5xl"
        >
          -
        </button>
        <div className="font-bold gap-12 text-5xl"> {count} </div>
        <button
          onClick={increaseHandler}
          className="border-l-2 text-center w-20 border-[#bfbfbf]  text-5xl"
        >
          +
        </button>
      </div>
      <div>
        {" "}
        <button
          onClick={resetHandler}
          className="bg-[#0398d4] text-white px-5 py-2 rounded-sm text-lg"
        >
          RESET
        </button>
      </div>
    </div>
  );
};

export default AcControls;

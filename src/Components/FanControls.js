import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
const Controls = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    axios.get(`/devices/HDQcbGz`).then((response) => {
      const { fan } = response.data;
      setCount(fan);
    });
  }, []);

  function decreaseHandler() {
    setCount(count < 1 ? 0 : count - 1);
    let speed = count - 1;
    axios
      .post("/devices", {
        teamid: "HDQcbGz",
        device: "fan",
        value: speed,
      })
      .then((response) => {
        console.log(response);
      });
  }
  function increaseHandler() {
    setCount(count > 4 ? 5 : count + 1);
    let speed = count + 1;
    axios
      .post("/devices", {
        teamid: "HDQcbGz",
        device: "fan",
        value: speed,
      })
      .then((response) => {
        console.log(response);
      });
  }

  function resetHandler() {
    setCount(0);
    let speed = 0;
    axios
      .post("/devices", {
        teamid: "HDQcbGz",
        device: "fan",
        value: speed,
      })
      .then((response) => {
        console.log(response);
      });
  }

  // Calculate the rotation degree based on the count
  return (
    <div className=" bg-[#12140073] flex flex-col border-2 h-[70vh] w-[30%] font-bold text-4xl justify-center items-center space-y-6 rounded-3xl">
      <div className=" items-center flex justify-center flex-col gap-4 space-y-4 text-white">
        <h1>Fan Controls</h1>
        <div
          className={count === 0 ? "fan-animation_none" : "fan-animation"}
          style={{ animationDuration: `${6 - count}s` }}
        ></div>
        <div className=" bg-transparent text-white border-2  border-white rounded-2xl  flex  gap-6 py-2">
          <button
            onClick={decreaseHandler}
            className={`border-r-2 text-center w-20 border-[#bfbfbf]  text-4xl`}
          >
            -
          </button>
          <div className="font-bold gap-12 text-4xl"> {count} </div>
          <button
            onClick={increaseHandler}
            className={`border-l-2 text-center w-20 border-[#bfbfbf]  text-4xl`}
          >
            +
          </button>
        </div>
        <div>
          <button
            onClick={resetHandler}
            className="bg-[#0398d4] text-white px-5 py-2 rounded-2xl text-lg"
          >
            RESET
          </button>
        </div>
      </div>
    </div>
  );
};

export default Controls;

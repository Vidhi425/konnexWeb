import React, { useState, useEffect } from "react";
import axios from "axios";
const AcControls = () => {
  const [count, setCount] = useState(16);
  const [powerOn, setPowerOn] = useState(false);

  useEffect(() => {
    axios.get(`/devices/HDQcbGz`).then((response) => {
      const { ac } = response.data;
      const { temp, state } = ac;
      setCount(temp);
      setPowerOn(state);
    });
  }, []);

  const togglePower = () => {
    setPowerOn((prevPower) => !prevPower);

    axios
      .post("/devices", {
        teamid: "HDQcbGz",
        device: "ac",
        value: { temp: count, state: !powerOn },
      })
      .then((response) => {
        console.log(response);
      });
  };

  const decreaseHandler = () => {
    if (powerOn) {
      setCount((prevCount) => (prevCount < 17 ? 16 : prevCount - 1));
      axios
        .post("/devices", {
          teamid: "HDQcbGz",
          device: "ac",
          value: { temp: count < 17 ? 16 : count - 1, state: powerOn },
        })
        .then((response) => {
          console.log(response);
        });
    } else {
      console.log("Not Power ON");
    }
  };

  const increaseHandler = () => {
    if (powerOn) {
      setCount((prevCount) => (prevCount > 29 ? 30 : prevCount + 1));
      axios
        .post("/devices", {
          teamid: "HDQcbGz",
          device: "ac",
          value: { temp: count + 1, state: powerOn },
        })
        .then((response) => {
          console.log(response);
        });
    } else {
      console.log("not power on");
    }
  };

  const resetHandler = () => {
    setCount(16);
    axios
      .post("/devices", {
        teamid: "HDQcbGz",
        device: "ac",
        value: { temp: 16, state: powerOn },
      })
      .then((response) => {
        console.log(response);
      });
  };

  const imageUrl = powerOn
    ? "./images/air-conditioner (2).png"
    : "./images/air-conditioner (1).png";

  return (
    <div className="flex flex-col font-bold text-4xl border-2 h-[100vh] w-[30%] justify-center items-center space-y-6">
      <h1>Ac Controls</h1>

      <img src={imageUrl} alt="AC" className="h-40 w-15" />
      <div className="bg-white flex  gap-12 py-3 rounded-sm text-[25px] text-[#344151]">
        <button
          onClick={decreaseHandler}
          className={`border-r-2 text-center w-20 border-[#bfbfbf]  text-5xl`}
        >
          -
        </button>
        <div className="font-bold gap-12 text-5xl"> {count} </div>
        <button
          onClick={increaseHandler}
          className={`border-l-2 text-center w-20 border-[#bfbfbf]  text-5xl`}
        >
          +
        </button>
      </div>
      <div>
        <button
          onClick={resetHandler}
          className="bg-[#0398d4] text-white px-5 py-2 rounded-sm text-lg"
        >
          RESET
        </button>
        <img
          src="./images/power.svg"
          alt="Power"
          className="h-40 w-14 cursor-pointer"
          onClick={togglePower}
        />
      </div>
    </div>
  );
};

export default AcControls;

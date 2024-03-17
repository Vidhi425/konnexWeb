import React, { useState, useEffect } from "react";
import axios from "axios";

const BulbControls = () => {
  const [powerOn, setPowerOn] = useState(0);
  useEffect(() => {
    axios.get(`/devices/HDQcbGz`).then((response) => {
      // console.log(response.data);
      const { bulb } = response.data;
      setPowerOn(bulb);
    });
  }, []);
  const togglePower = () => {
    setPowerOn((prevPower) => (prevPower ? 0 : 1));
    axios
      .post("/devices", {
        teamid: "HDQcbGz",
        device: "bulb",
        value: powerOn ? 0 : 1,
      })
      .then((response) => {
        console.log(response);
      });
  };

  const bulbImageUrl = powerOn
    ? "./images/light-bulb (1).png"
    : "./images/light-bulb.png";

  return (
    <div className="bg-[#12140073] flex flex-col border-2 h-[70vh] w-[30%] justify-center items-center space-y-6 rounded-3xl">
      <div className=" items-center flex justify-center flex-col gap-4 space-y-4">
        <h1 className="font-bold text-white text-4xl">Bulb Controls</h1>
        <img src={bulbImageUrl} alt="Bulb" className="w-28 h-28"></img>
        <img
          src="./images/power.svg"
          alt="Power"
          className="h-30 w-14 cursor-pointer"
          onClick={togglePower}
        ></img>
      </div>
    </div>
  );
};

export default BulbControls;

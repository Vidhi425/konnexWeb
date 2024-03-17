import React, { useState, useEffect } from "react";
import axios from "axios";
const LedControls = () => {
  const [color, setColor] = useState(""); // Red color as default
  useEffect(() => {
    axios.get(`/devices/HDQcbGz`).then((response) => {
      const { led } = response.data;
      setColor(led);
    });
  }, []);

  function handleColorChange(newcolor) {
    // setColor(event.target.value);
    setColor(newcolor);
    console.log(newcolor);
    axios
      .post("/devices", {
        teamid: "HDQcbGz",
        device: "led",
        value: newcolor,
      })
      .then((response) => {
        console.log(response);
      });
  }

  return (
    <>
      <div className=" rounded-3xl bg-[#12140073]  flex flex-col border-2 h-[70vh] w-[30%] font-bold text-4xl justify-center items-center space-y-6">
        <div className=" items-center flex justify-center flex-col gap-4 space-y-4 text-white">
          <h1>LED Controls</h1>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill={color}
            className="w-16 h-24"
          >
            <path d="M12 .75a8.25 8.25 0 0 0-4.135 15.39c.686.398 1.115 1.008 1.134 1.623a.75.75 0 0 0 .577.706c.352.083.71.148 1.074.195.323.041.6-.218.6-.544v-4.661a6.714 6.714 0 0 1-.937-.171.75.75 0 1 1 .374-1.453 5.261 5.261 0 0 0 2.626 0 .75.75 0 1 1 .374 1.452 6.712 6.712 0 0 1-.937.172v4.66c0 .327.277.586.6.545.364-.047.722-.112 1.074-.195a.75.75 0 0 0 .577-.706c.02-.615.448-1.225 1.134-1.623A8.25 8.25 0 0 0 12 .75Z" />
            <path
              fill-rule="evenodd"
              d="M9.013 19.9a.75.75 0 0 1 .877-.597 11.319 11.319 0 0 0 4.22 0 .75.75 0 1 1 .28 1.473 12.819 12.819 0 0 1-4.78 0 .75.75 0 0 1-.597-.876ZM9.754 22.344a.75.75 0 0 1 .824-.668 13.682 13.682 0 0 0 2.844 0 .75.75 0 1 1 .156 1.492 15.156 15.156 0 0 1-3.156 0 .75.75 0 0 1-.668-.824Z"
              clip-rule="evenodd"
            />
          </svg>
          <div className="flex items-center justify-center gap-4 ">
            <div
              onClick={() => handleColorChange("#ff0000")}
              className="rounded-3xl bg-[#ff0000] h-12 w-12 border-slate-100 border-2"
            ></div>
            <div
              onClick={() => handleColorChange("#00ff00")}
              className="rounded-3xl bg-[#00ff00] h-12 w-12 border-slate-100 border-2"
            ></div>
            <div
              onClick={() => handleColorChange("#0000ff")}
              className="rounded-3xl bg-[#0000ff] h-12 w-12 border-slate-100 border-2"
            ></div>
            <div
              onClick={() => handleColorChange("#ffff00")}
              className="rounded-3xl bg-[#ffff00] h-12 w-12 border-slate-100 border-2"
            ></div>
            <div
              onClick={() => handleColorChange("#800080")}
              className="rounded-3xl bg-[#800080] h-12 w-12 border-slate-100 border-2"
            ></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LedControls;

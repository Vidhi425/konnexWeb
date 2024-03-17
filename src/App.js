import "./App.css";
import Controls from "../src/Components/FanControls";
import CardSection from "./Components/CardSection";
import BulbControls from "./Components/Bulbcontrol";
import AcControls from "./Components/Ac";
import LedControls from "./Components/Led";
import axios from "axios";
import { useState } from "react";

axios.defaults.baseURL = "https://kodessphere-api.vercel.app";

function App() {
  const [device, setDevice] = useState("");
  return (
    <>
      <div className="flex flex-row justify-center items-center gap-3 bg-[#8AAAE5] ">
        <CardSection device={device} setDevice={setDevice} />
        {device === "fan" ? (
          <Controls />
        ) : device === "bulb" ? (
          <BulbControls />
        ) : device === "ac" ? (
          <AcControls />
        ) : device === "led" ? (
          <LedControls />
        ) : (
          ""
        )}

        {/* <>{device === "fan" ? <Controls /> : ""}</>
        <>{device === "bulb" ? <BulbControls /> : ""}</>
        <>{device === "ac" ? <AcControls /> : ""}</> */}
      </div>
    </>
  );
}

export default App;

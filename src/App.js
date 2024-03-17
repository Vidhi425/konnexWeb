import "./App.css";
import Controls from '../src/Components/FanControls'
import AcControls from "./Components/Ac";
import BulbControls from "./Components/Bulbcontrol";
import LedControls from "./Components/Led";

function App() {
    return(
        <><Controls /><AcControls /> <BulbControls/>  <LedControls/></>
    )
}

export default App;

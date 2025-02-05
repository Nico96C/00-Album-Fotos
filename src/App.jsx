import { useState } from "react";
import "./App.css";
import SnowEffect from "./effects/particles";
import StartScreen from "./modals/StartScreen";

function App() {
  const [showStartScreen, setShowStartScreen] = useState(true);

  const handleStart = () => {
    setShowStartScreen(false);
  };

  return (
    <>
      {showStartScreen && <StartScreen onStart={handleStart} />}
      <div>
        <SnowEffect />
      </div>
    </>
  );
}

export default App;

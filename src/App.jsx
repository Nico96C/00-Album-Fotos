import { useState } from "react";
import "./App.css";
import SnowEffect from "./effects/particles";
import StartScreen from "./modals/StartScreen";
import VisualNovelModal from "./components/VisualNovelModal";

function App() {
  const [showStartScreen, setShowStartScreen] = useState(true);
  const [showVisualNovel, setShowVisualNovel] = useState(false);

  const handleStart = () => {
    setShowStartScreen(false);
    setShowVisualNovel(true);
  };

  const handleCloseVisualNovel = () => {
    setShowVisualNovel(false);
  };

  return (
    <>
      {showStartScreen && <StartScreen onStart={handleStart} />}
      {showVisualNovel && <VisualNovelModal onClose={handleCloseVisualNovel} />}
      <div>
        <SnowEffect />
      </div>
    </>
  );
}

export default App;

import React from "react";
import CircleComponent from "../components/circle";
import VideoPlayer from "../components/videoPlayer";  // Added

const App = () => {
  return (
    <div className="App">
      <div className="vertical-container">
        <div className="bottom-right">
          <CircleComponent />
        </div>
      </div>
    </div>
  );
};

export default App;

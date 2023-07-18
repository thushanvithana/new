import React, { useRef, useState } from "react";

const VideoPlayer = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    // Update any progress bar or time display components if needed
    // Example: Update current time and total duration
    // const currentTime = videoRef.current.currentTime;
    // const duration = videoRef.current.duration;
  };

  return (
    <div>
      <video ref={videoRef} src="../video/sample.mp4" onTimeUpdate={handleTimeUpdate} />

      <button onClick={handlePlayPause}>{isPlaying ? "Pause" : "Play"}</button>
    </div>
  );
};

export default VideoPlayer;

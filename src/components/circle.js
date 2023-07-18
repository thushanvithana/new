import React, { useEffect, useState } from "react";

const CircleComponent = () => {
  const [rotatedText, setRotatedText] = useState("");

  useEffect(() => {
    const originalText = "------CONTACT-US-0772940951";
    const transformedText = originalText
      .split("")
      .map(
        (char, i) =>
          `<span style="transform:rotate(${90 + i * (360 / originalText.length)}deg)">${char}</span>`
      )
      .join("");
    setRotatedText(transformedText);
  }, []);

  return (
    <div className="circle">
      <div className="logo">
        <video className="video" src="../video/sample.mp4" controls autoPlay></video>
      </div>
      <div className="text">
        <p dangerouslySetInnerHTML={{ __html: rotatedText }} />
      </div>
    </div>
  );
};

export default CircleComponent;

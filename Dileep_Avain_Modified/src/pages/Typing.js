import React, { useEffect, useState } from "react";
import "./index.css";

const Typing = ({ textArray }) => {
  let str = "";
  const [currentIndex, setCurrentIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(-1);

  useEffect(() => {
    let typingInterval;

    if (currentIndex < textArray.length) {
      typingInterval = setInterval(() => {
        setCharIndex((prevCharIndex) => {
          if (prevCharIndex < textArray[currentIndex].length) {
            return prevCharIndex + 1;
          } else {
            if (currentIndex < textArray.length - 1) {
              setCurrentIndex((prevIndex) => prevIndex + 1);
              return -1; // Start typing the next string from the beginning
            } else {
              clearInterval(typingInterval); // Clear the interval after the last string is typed
              return prevCharIndex;
            }
          }
        });
      }, 100); // Speed of typing
    }

    return () => clearInterval(typingInterval);
  }, [currentIndex, textArray]);

  return (
    <div className="typing-container">
      {textArray.map((text, index) => (
        <div key={index} className={`typing-text ${"active"}`}>
          {index === currentIndex ? text.substring(0, charIndex) : text}
          {index === currentIndex && <span className="blinking-cursor" />}
        </div>
      ))}
    </div>
  );
};

export default Typing;

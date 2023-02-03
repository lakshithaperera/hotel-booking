
import { useState, useRef, useEffect } from "react";
import React from "react";
import P1 from "../../assets/img/propery-1-1.jpg";
import P2 from "../../assets/img/propery-1-2.jpg";
import P3 from "../../assets/img/propery-1-3.jpg";
import P4 from "../../assets/img/propery-1-4.jpg";
import P5 from "../../assets/img/propery-1-5.png";
import P6 from "../../assets/img/propery-1-6.png";
import { PropertySlideShow } from "./properycarousel-styled";

const propery= [P1, P2, P3, P4, P5, P6];
const delay = 6500;

function PropertySlide1() {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }
useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === propery.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <PropertySlideShow>
        <div className="slideshow">
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {propery.map((backgroundColor, index) => (
          <div
            className="slide"
            key={index}
            style={{ backgroundColor }}
          >
            <img src={backgroundColor} alt="" />
          </div>
        ))}
      </div>

      <div className="slideshowDots">
        {propery.map((_, idx) => (
          <div
            key={idx}
            className={`slideshowDot${index === idx ? " active" : ""}`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>
    </div>
    </PropertySlideShow>
    
  );
}

export default PropertySlide1
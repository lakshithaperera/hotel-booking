
import { useState, useRef, useEffect } from "react";
import React from "react";
import P1 from "../../assets/img/propery-3-1.png";
import P2 from "../../assets/img/propery-3-2.png";
import P3 from "../../assets/img/propery-3-3.png";
import P4 from "../../assets/img/propery-3-4.png";
import P5 from "../../assets/img/propery-3-5.png";
import P6 from "../../assets/img/propery-3-6.png";
import P7 from "../../assets/img/propery-3-7.png";
import { PropertySlideShow } from "./properycarousel-styled";

const propery= [P1, P2, P3, P4, P5, P6, P7];
const delay = 6500;

function PropertySlide3() {
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

export default PropertySlide3
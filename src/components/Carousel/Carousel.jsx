import { useState, useRef, useEffect } from "react";
import React from "react";
import "./carousel.css";
import TOPHOTEL1 from "../../assets/img/tophotel1.jpg";
import TOPHOTEL2 from "../../assets/img/tophotel2.jpg";
import TOPHOTEL3 from "../../assets/img/tophotel3.png";
import TOPHOTEL4 from "../../assets/img/tophotel4.png";


const hotels = [
  { img: TOPHOTEL1 },
  { img: TOPHOTEL2 },
  { img: TOPHOTEL3 },
  { img: TOPHOTEL4 },
];
const delay = 2500;

function Slideshow() {
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
          prevIndex === hotels.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className="slideshow">
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {hotels.map((background, index) => (
          <div className="slide" key={index}>
            <img src={background.img} alt="" />
          </div>
          
        ))}
      </div>

      <div className="slideshowDots">
        {hotels.map((item, idx) => (
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
  );
}

export default Slideshow;

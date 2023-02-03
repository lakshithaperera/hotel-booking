import React from "react";
import Slider from "react-slick";
import "./slick1.css"; 
import "./slick-them.css";
import { ImgSliderCard, ImgSliderSection } from "./ImgCarousel-styled";
import SlideShowHotelsData from "../../data/SlideShowHotelsData/SlideShowHotelsData";

export const ImgCarousel = () => {


    const settings = {
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      speed: 1000,
      autoplaySpeed: 6000,
      cssEase: "linear"
    };
    return (
      <ImgSliderSection>
        <div className="wrapper">
        <Slider className="slider-section" {...settings}>
    {SlideShowHotelsData.map((item) => {
      return(
        <ImgSliderCard >
            <img  src={item.img} alt="" />
         </ImgSliderCard>
      )
    }) }
         

        
        </Slider>
        </div>
        
      </ImgSliderSection>
    );
 
}
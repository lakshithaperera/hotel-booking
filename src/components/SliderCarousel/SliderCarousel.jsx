import React from "react";
import Slider from "react-slick";
import "./slick.css"; 
import "./slick-theme.css";
import { SliderCard, SliderSection } from "./SliderCarousel-styled";
import {  ColorButton } from "../Navbar/Navbar-styled";
import SlideShowHotelsData from "../../data/SlideShowHotelsData/SlideShowHotelsData";
import { useNavigate } from "react-router-dom";





export const SlideShowHotels = () => {

const navigate = useNavigate();
const sendId = (id) => {
  navigate('/hotelbook',
  {
    state: {
       btnId : id,
    }
  }
  );
}
 
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      speed: 1000,
      autoplaySpeed: 2000,
      cssEase: "linear",
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
            
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
          slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <SliderSection>
        <div className="wrapper">
        <Slider className="slider-section" {...settings}>
    {SlideShowHotelsData.map((item) => {
      return(
        <SliderCard>
        <img src={item.img} alt="" />
        <div className="text">
         <h4>{item.title}</h4>
         <p>{item.text}</p>
         <ColorButton  onClick={() => sendId(item.id)}  className="btn">Book Now</ColorButton>
        </div>
         </SliderCard>
      )
    }) }
         

        
        </Slider>
        </div>
        
      </SliderSection>
    );
 
}
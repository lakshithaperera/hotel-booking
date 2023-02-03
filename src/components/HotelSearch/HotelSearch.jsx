import React, { Fragment } from 'react'
import { BiHotel } from "react-icons/bi";
import { MdOutlineTour } from "react-icons/md";
import { useState } from "react";
import { HotelTopBoxs, HotelTour } from './HotelSearch-styled';
import { ColorButton } from '../Navbar/Navbar-styled';

export const HotelSearch = () => {
    const [isActiveHotel, setIsActiveHotel] = useState(true);
    const [isActiveTour, setIsActiveTour] = useState(false);

  const handdleClickHotel = () => {
    // 👇️ toggle
    setIsActiveHotel(true);
    setIsActiveTour(false);

    // 👇️ or set to true
    // setIsActive(true);
  };

  
  const handdleClickTour = () => {
    // 👇️ toggle
    setIsActiveTour(true);
    setIsActiveHotel(false);

    // 👇️ or set to true
    // setIsActive(true);
  };

 
  
  return (
    <Fragment>
        <HotelTour>
            <div className="top">
              <HotelTopBoxs className='hotel-box'  style={{
          backgroundColor: isActiveHotel ? '#9797ff75' : ''
        }} onClick={handdleClickHotel} id="hotel">
                <BiHotel className="icon" />
                <h3>Hotel</h3>
              </HotelTopBoxs>

              <HotelTopBoxs className='tour-box' style={{
          backgroundColor: isActiveTour ? '#9797ff75' : ''
        }} onClick={handdleClickTour} id="tour">
                <MdOutlineTour className="icon" />
                <h3>Tour</h3>
              </HotelTopBoxs>
            </div>

            <div className="bottom ">

              <div className="hotel-input input-field"  style={{
          display: isActiveHotel ? 'flex' : 'none'
        }}>
              <div className="left">
                <label>Location</label>
                <input type="text" placeholder="Where are you going?" />
              </div>

              <div className="middle">
                <label>Check in - Check out</label>
                <input type="date" placeholder="Select date" />
              </div>

              <div className="right">
                <ColorButton>Search</ColorButton>
              </div>
              </div>

              <div className="tour-input input-field" style={{
          display: isActiveTour ? 'flex' : 'none'
        }}>
                 <div className="left">
                <label>Location</label>
                <input type="text" placeholder="Where are you going?" />
              </div>

              <div className="middle">
                <label>Check in - Check out</label>
                <input type="date" placeholder="Select date" />
              </div>

              <div className="right">
                <ColorButton>Search</ColorButton>
              </div>



              
              </div>
             
            </div>

          </HotelTour>
    </Fragment>
  )
}

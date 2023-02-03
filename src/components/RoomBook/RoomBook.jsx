import React, { Fragment } from "react";
import {
  MealType,
  NoOfRooms,
  Policies,
  Price,
  RoomBookSec,
  RoomBookWrapper,
  RoomContainer,
  RoomHeader,
  RoomTitle,
} from "./RoomBook-styled";
import { BodyText } from "../../pages/Home/Home-styled";
import RoomBookData from "../../data/RoomBookData/RoomBookData";
import { GiPerson } from "react-icons/gi";
import { HiMinus } from "react-icons/hi";
import { HiPlus } from "react-icons/hi";
import { ColorButton } from "../Navbar/Navbar-styled";

const RoomBookComponent = () => {
  return (
    <Fragment>
      <RoomBookSec>
        {RoomBookData.map((item) => {
          return (
            <RoomBookWrapper>
              <RoomTitle>{item.title}</RoomTitle>
              <RoomHeader>
                <h4 className="fst">Room Type</h4>
                <h4>Meal Type</h4>
                <h4>No. of Rooms</h4>
                <h4>Policies</h4>
                <h4 className="scnd">Price</h4>
              </RoomHeader>

              <RoomContainer>
                <div className="img">
                  <img src={item.img} alt="" />
                  <div className="text">
                    <BodyText className="txt">{item.text}</BodyText>
                  </div>
                </div>

                <MealType>
                  <div className="meal-type">
                    <div className="icons">
                      <GiPerson className="icon" />
                    </div>

                    <div className="input-area">
                      <input
                        type="radio"
                        id="html"
                        name="fav_language"
                        value="HTML"
                      />
                        <label for="html">Bed & Breakfast</label>
                    </div>

                    <div className="input-area">
                      <input
                        type="radio"
                        id="css"
                        name="fav_language"
                        value="CSS"
                      />
                        <label for="css">Half Board</label>
                    </div>

                    <div className="input-area">
                      <input
                        type="radio"
                        id="javascript"
                        name="fav_language"
                        value="JavaScript"
                      />
                        <label for="javascript">Full Board</label>
                    </div>
                  </div>

                  <div className="meal-type">
                    <div className="icons">
                      <GiPerson className="icon" />
                      <GiPerson className="icon" />
                    </div>

                    <div className="input-area">
                      <input
                        type="radio"
                        id="html"
                        name="fav_language"
                        value="HTML"
                      />
                        <label for="html">Bed & Breakfast</label>
                    </div>

                    <div className="input-area">
                      <input
                        type="radio"
                        id="cs"
                        name="fav_language"
                        value="CSS"
                      />
                        <label for="css">Half Board</label>
                    </div>

                    <div className="input-area">
                      <input
                        type="radio"
                        id="javascript"
                        name="fav_language"
                        value="JavaScript"
                      />
                        <label for="javascript">Full Board</label>
                    </div>
                  </div>

                  <div className="meal-type">
                    <div className="icons">
                      <GiPerson className="icon" />
                      <GiPerson className="icon" />
                      <GiPerson className="icon" />
                    </div>

                    <div className="input-area">
                      <input
                        type="radio"
                        id="html"
                        name="fav_language"
                        value="HTML"
                      />
                        <label for="html">Bed & Breakfast</label>
                    </div>

                    <div className="input-area">
                      <input
                        type="radio"
                        id="cs"
                        name="fav_language"
                        value="CSS"
                      />
                        <label for="css">Half Board</label>
                    </div>

                    <div className="input-area">
                      <input
                        type="radio"
                        id="javascript"
                        name="fav_language"
                        value="JavaScript"
                      />
                        <label for="javascript">Full Board</label>
                    </div>
                  </div>
                </MealType>

                <NoOfRooms>
                  <div className="no-of-room">
                  <div className="input-area">
                    <HiMinus className="icon" />
                    <input type="text" />
                    <HiPlus className="icon" />
                  </div>

                  <div className="check-area">
                    <div className="check">
                      <input
                        type="checkbox"
                        id="vehicle1"
                        name="vehicle1"
                        value="Bike"
                      />
                      <label for="vehicle1">Extra Beds</label>
                    </div>

                    <div className="input-area">
                      <HiMinus className="icon" />
                      <input type="text" />
                      <HiPlus className="icon" />
                    </div>
                  </div>

                  <div className="check-area">
                    <div className="check">
                      <input
                        type="checkbox"
                        id="vehicle1"
                        name="vehicle1"
                        value="Bike"
                      />
                      <label for="vehicle1">Extra Beds</label>
                    </div>

                    <div className="input-area">
                      <HiMinus className="icon" />
                      <input type="text" />
                      <HiPlus className="icon" />
                    </div>
                  </div>
                  </div>

                  <div className="no-of-room">
                  <div className="input-area">
                    <HiMinus className="icon" />
                    <input type="text" />
                    <HiPlus className="icon" />
                  </div>

                  <div className="check-area">
                    <div className="check">
                      <input
                        type="checkbox"
                        id="vehicle1"
                        name="vehicle1"
                        value="Bike"
                      />
                      <label for="vehicle1">Extra Beds</label>
                    </div>

                    <div className="input-area">
                      <HiMinus className="icon" />
                      <input type="text" />
                      <HiPlus className="icon" />
                    </div>
                  </div>

                  <div className="check-area">
                    <div className="check">
                      <input
                        type="checkbox"
                        id="vehicle1"
                        name="vehicle1"
                        value="Bike"
                      />
                      <label for="vehicle1">Extra Beds</label>
                    </div>

                    <div className="input-area">
                      <HiMinus className="icon" />
                      <input type="text" />
                      <HiPlus className="icon" />
                    </div>
                  </div>
                  </div>

                  <div className="no-of-room">
                  <div className="input-area">
                    <HiMinus className="icon" />
                    <input type="text" />
                    <HiPlus className="icon" />
                  </div>

                  <div className="check-area">
                    <div className="check">
                      <input
                        type="checkbox"
                        id="vehicle1"
                        name="vehicle1"
                        value="Bike"
                      />
                      <label for="vehicle1">Extra Beds</label>
                    </div>

                    <div className="input-area">
                      <HiMinus className="icon" />
                      <input type="text" />
                      <HiPlus className="icon" />
                    </div>
                  </div>

                  <div className="check-area">
                    <div className="check">
                      <input
                        type="checkbox"
                        id="vehicle1"
                        name="vehicle1"
                        value="Bike"
                      />
                      <label for="vehicle1">Extra Beds</label>
                    </div>

                    <div className="input-area">
                      <HiMinus className="icon" />
                      <input type="text" />
                      <HiPlus className="icon" />
                    </div>
                  </div>
                  </div>

                 
                </NoOfRooms>

                <Policies>
                  <div className="policies">
                  <BodyText className="text">No-Pets Allowed</BodyText>
                  <BodyText className="text">  No Weapons Allowed</BodyText>
                  </div>

                  <div className="policies">
                  <BodyText className="text">No-Pets Allowed</BodyText>
                  <BodyText className="text">  No Weapons Allowed</BodyText>
                  </div>

                  
                  <div className="policies">
                  <BodyText className="text">No-Pets Allowed</BodyText>
                  <BodyText className="text">  No Weapons Allowed</BodyText>
                  </div>
                </Policies>

                <Price>
                  <div className="price">
                  <h4>Rs:0000</h4>
                  <h3>Rs:0000</h3>
                  <div className="price-box">
                   
                    <h4>Rs.0000.00</h4>
              
                  </div>
                  <ColorButton className="btn">Reserve</ColorButton>
                  </div>

                  <div className="price">
                  <h4>Rs:0000</h4>
                  <h3>Rs:0000</h3>
                  <div className="price-box">
                   
                    <h4>Rs.0000.00</h4>
              
                  </div>
                  <ColorButton className="btn">Reserve</ColorButton>
                  </div>

                  <div className="price">
                  <h4>Rs:0000</h4>
                  <h3>Rs:0000</h3>
                  <div className="price-box">
                   
                    <h4>Rs.0000.00</h4>
              
                  </div>
                  <ColorButton className="btn">Reserve</ColorButton>
                  </div>
                  
                </Price>
              </RoomContainer>
            </RoomBookWrapper>
          );
        })}
      </RoomBookSec>rooro
    </Fragment>
  );
};

export default RoomBookComponent;

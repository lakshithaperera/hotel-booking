import React from "react";

import {
  BodyHeading,
  BodySubText,
  BodyText,
  Destinations,
  DistinationImg,
  HeaderTextField,
  HomeContainer,
  HotelInSriLanka,
  Hotels,
  HotelsImg,
  HotelsImgContainer,
  HotelsImgs,
  HotelsImgText,
  HotelsImgTextField,
  SubHeading,
  TopHotelcards,
  TopHotels,
  TourisDestinations,
  TravelArticles,
  TravelArticlesCard,
  TravelArticlesCards,
  TravelArticlesCardText,
  TravelArticlesCardTextTitle,
  TravelArticlesImg,
  TravelArticlesImgContainer,
} from "./Home-styled";
import BG from "../../assets/img/header-bg.jpg";
import { ColorButton } from "../../components/Navbar/Navbar-styled";
import { HotelSearch } from "../../components/HotelSearch/HotelSearch";
import DestinationsData from "../../data/ExploreData/TouristDestinations";
import { motion } from "framer-motion";
import HotelsData from "../../data/HotelsData/HotelsData";
import BlogData from "../../data/BlogData/BlogData";
import {SlideShowHotels}  from "../../components/SliderCarousel/SliderCarousel";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
  


export const Home = () => {
 
  const navigate = useNavigate();
  const sendHotelId = (id) => {
    if(id === "1"){
      navigate('/property-type/hotels-in-sri-lanka');
    }
    else if(id === "2"){
      navigate('/property-type/villas-in-sri-lanka');
    }
    else if(id === "3"){
      navigate('/property-type/resorts-in-sri-lanka');
    }
    else if(id === "4"){
      navigate('/property-type/bungalow-in-sri-lanka');
    }
  }

  return (
    <motion.Fragment
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.2, type: "tween", duration: 1 }}
    >
      <HomeContainer imgUrl={BG}>
        <motion.div className="wrapper"
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ type: "tween", duration: 1 }}
        >
          <HeaderTextField>
            <h2>Holiday in Sri Lanka for the lowest rates!</h2>
            <p>
              Special offers for registered users with limited time discounts on
              places to stay.
            </p>
          </HeaderTextField>

          <HotelSearch />
        </motion.div>
      </HomeContainer>

      <TopHotels>
        <motion.div className="wrapper"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: "tween", duration: 1 }}
        >
          <SubHeading>Top Deals in Hotels in Sri Lanka</SubHeading>
          <BodyText>
            Find the best rates for your holiday in hotel offers in Sri Lanka!
            Explore places to stay on your holiday in Sri Lanka to suit your
            budget.
          </BodyText>
        </motion.div>

        <TopHotelcards>
          <motion.div
            className="wrapper"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: "tween", duration: 1 }}
          >
            <SlideShowHotels />
          </motion.div>
        </TopHotelcards>
      </TopHotels>

      <TourisDestinations>
        <motion.div
          className="wrapper"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: "tween", duration: 1 }}
        >
          <SubHeading>Sri Lanka Tourist Destinations</SubHeading>
          <BodyText>
            Travel to Sri Lanka and wander wisely with Roomista best price
            guarantee.
          </BodyText>

          <Destinations>
            {DestinationsData.map((item) => {
              return (
                <motion.div
                  className="col"
                  initial={{ opacity: 0, y: -10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ type: "tween", duration: 1 }}
                >
                  <div className="img">
                    <DistinationImg src={item.img} alt="" />
                  </div>
                  <div className="text">
                    <BodyHeading className="d-title">{item.title}</BodyHeading>
                    <BodySubText className="d-text">{item.text}</BodySubText>
                  </div>
                </motion.div>
              )
            })}
          </Destinations>
          <Link to="explore">
          <ColorButton className="viev-button">
            View All Destination
          </ColorButton>
          </Link> 
        </motion.div>
      </TourisDestinations>

      <HotelInSriLanka>
        <Hotels>
          <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: "tween", duration: 1 }}
          >
          <SubHeading>Hotels in Sri Lanka</SubHeading>
          <BodyText>
            Browse By Type Hotels in Sri Lanka, Villas in Sri Lanka, Apartments
            in Sri Lanka, Resorts in Sri Lanka
          </BodyText>
          </motion.div>
         

          <HotelsImgs>
            {HotelsData.map((item) => {
              return (
                <motion.div className="hotelImgCon"
                  initial={{ opacity: 0, y: -10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ type: "tween", duration: 1 }}
                >
                  <HotelsImgContainer>
                    <HotelsImg  src={item.img}></HotelsImg>
                    <HotelsImgTextField>
                      <HotelsImgText>
                        <h4>{item.title}</h4>
                        <p>{item.amount}</p>
                      </HotelsImgText>
                      <ColorButton  className="view-btn" onClick={() => sendHotelId(item.id)}>View Properties</ColorButton>
                    </HotelsImgTextField>
                   
                  </HotelsImgContainer>
                </motion.div>
              );
            })}
          </HotelsImgs>
        </Hotels>
      </HotelInSriLanka>

      <TravelArticles>
        <motion.div
         initial={{ opacity: 0, y: -10 }}
         whileInView={{ opacity: 1, y: 0 }}
         transition={{ type: "tween", duration: 1 }}
        >
        <SubHeading>Travel articles</SubHeading>
        <BodyText>Latest blog posts </BodyText>
        </motion.div>
        

        <TravelArticlesCards>
          {BlogData.map((item) => {
            return (
              <motion.div
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ type: "tween", duration: 1 }}
              >
                   <TravelArticlesCard>
                <TravelArticlesImgContainer>
                  <TravelArticlesImg src={item.img}></TravelArticlesImg>
                </TravelArticlesImgContainer>
                <TravelArticlesCardText>
                  <TravelArticlesCardTextTitle>
                    {item.title}
                  </TravelArticlesCardTextTitle>
                  <BodySubText>{item.date}</BodySubText>
                  <BodyText>{item.text}</BodyText>
                </TravelArticlesCardText>
              </TravelArticlesCard>
              </motion.div>
             
            );
          })}
        </TravelArticlesCards>
      </TravelArticles>
    </motion.Fragment>
  );
};

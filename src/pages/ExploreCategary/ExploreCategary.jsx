import React from "react";
import { BodyText, SubHeading } from "../Home/Home-styled";
import {
  ExploreContainer,
  ExploreImg,
  ExploreImgContainer,
  ExploreMenu,
  ExploreSec,
  Wrapper,
} from "./ExploreCategary-styled";

import { motion } from "framer-motion";
import DestinationsData from "../../data/ExploreData/TouristDestinations";
import { useNavigate } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import { Fragment } from "react";

export const ExploreCategary = () => {
  const navigate = useNavigate();
  const showAll = () => {
    navigate("/explore")
  }
  const categaryDataValue = (value) => {
    navigate('/explore-categary',
    {
      state: {
         categaryValue : value,
      }
    }
    );
  }

  const  sendExploreImgId = (id) => {
    navigate('/explore/destination',
    {
      state: {
        exploreImgId : id,
      }
    }
    );
  } 

  const { state } = useLocation();

  return (
    <Fragment>
      <ExploreSec>
        <Wrapper>
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: "tween", duration: 1 }}
          >
            <SubHeading>
              Find the lowest rates for Hotels in Sri Lanka and explore!
            </SubHeading>
            <BodyText>
              Are you looking for a budget hotel in Colombo? Or Hotels in Ella?
              How about Hotels in Sri Lanka for Honeymoon? A Sri Lanka Beach
              Resort?Or watchout for Hotels in Sri Lanka offers? Roomista will
              help you find it and at the lowest possible rate!
            </BodyText>
          </motion.div>

          <ExploreMenu>
            <motion.ul
              className="Explore-menu"
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ type: "tween", duration: 1 }}
            >
                 <li  onClick={showAll}>
                Show all
              </li>
              <li onClick={() => categaryDataValue("architecture")}>
                Architecture
              </li>
              <li onClick={() => categaryDataValue("beaches")}>
                Beaches
              </li>
              <li onClick={() => categaryDataValue("elephants")}>
                Elephants
              </li>
              <li onClick={() => categaryDataValue("nationalParks")}>
                NationalParks
              </li>
              <li onClick={() => categaryDataValue("adventure")}>
                Adventure
              </li>
              <li onClick={() => categaryDataValue("hiking")}>
                Hiking
              </li>
              <li onClick={() => categaryDataValue("museums")}>
                Museums
              </li>
              <li onClick={() => categaryDataValue("nature")}>
                Nature
              </li>
              <li onClick={() => categaryDataValue("safari")}>
                Safari
              </li>
              <li onClick={() => categaryDataValue("surfing")}>
                Surfing
              </li>
            </motion.ul>
          </ExploreMenu>

          <ExploreContainer>
            <motion.div
              className="wrapper"
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ type: "tween", duration: 1 }}
            >
             {DestinationsData.filter(item => item.catogary.includes(state.categaryValue)).map((item) => {
                return(
                  <ExploreImgContainer>
                  <ExploreImg onClick={() => sendExploreImgId(item.id)} src={item.img} />
                  <div className="title" onClick={() => sendExploreImgId(item.id)}>{item.title}</div>
                </ExploreImgContainer>
                )
              })}
            </motion.div>
          </ExploreContainer>
        </Wrapper>
      </ExploreSec>
    </Fragment>
  );
};

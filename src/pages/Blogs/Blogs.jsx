import React from "react";
import {
  BlogCard,
  BlogCardImg,
  BlogCards,
  BlogCardText,
  BlogSection,
} from "./Blogs-styled";

import { BodySubText, BodyText } from "../Home/Home-styled";
import { motion } from "framer-motion";
import BlogData from "../../data/BlogData/BlogData";

export const Blog = () => {
  return (
    <motion.Fragment
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ type: "tween", duration: 1 }}
    >
      <BlogSection>
        <BlogCards>
        
          {BlogData.map((item) => {
            return(
              <motion.div 
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ type: "tween", duration: 1 }}
              >
                    <BlogCard>
              <BlogCardImg>
                <img src={item.img} alt="" />
              </BlogCardImg>
              <BlogCardText>
                <h2 className="title">
                  {item.title}
                </h2>
                <BodySubText>{item.date}</BodySubText>
                <BodyText style={{ textAlign: "left" }}>
                  {item.text}
                  <a href="/">Read more</a>
                </BodyText>
              </BlogCardText>
            </BlogCard>
              </motion.div>
             
            )
          })}  
          


        </BlogCards>
      </BlogSection>
    </motion.Fragment>
  );
};

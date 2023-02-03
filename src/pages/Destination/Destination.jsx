import React  from "react";
import { BodyText } from "../Home/Home-styled";
import { DestinationSection } from "./Destination-styled";
import { FooterTitleText } from "../../components/Footer/Footer-styled";
import DestinationsBlogData from "../../data/Destination/DestinationData";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";

export const Destination = () => {
  const { state } = useLocation();
  return (
    <motion.Fragment
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.2, type: "tween", duration: 1 }}
    >
      {DestinationsBlogData.filter(
        (item) => item.id === state.exploreImgId
      ).map((item) => {
        return (
          <DestinationSection>
            <div className="wrapper">
              <motion.div
                className="header-sec"
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ type: "tween", duration: 1 }}
              >
                <div className="left">
                  <h2>{item.headerSection.title}</h2>
                  <BodyText className="b-text">
                    {item.headerSection.text}
                  </BodyText>
                </div>

                <div className="right">
                  <img src={item.headerSection.img} alt="" />
                </div>
              </motion.div>
            </div>
            <div className="text-section">
              <div className="left">
                <h2>{item.bodySection.left.title}</h2>

                <motion.div
                  className="text-feild"
                  initial={{ opacity: 0, y: -10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ type: "tween", duration: 1 }}
                >
                  <FooterTitleText>
                    {item.bodySection.left.textFeild1.subTitle}
                  </FooterTitleText>
                  <BodyText>{item.bodySection.left.textFeild1.text}</BodyText>
                </motion.div>

                <motion.div
                  className="text-feild"
                  initial={{ opacity: 0, y: -10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ type: "tween", duration: 1 }}
                >
                  <FooterTitleText>
                    {item.bodySection.left.textFeild2.subTitle}
                  </FooterTitleText>
                  <BodyText>{item.bodySection.left.textFeild2.text}</BodyText>
                </motion.div>

                <motion.div
                  className="text-feild"
                  initial={{ opacity: 0, y: -10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ type: "tween", duration: 1 }}
                >
                  <FooterTitleText>
                    {item.bodySection.left.textFeild3.subTitle}
                  </FooterTitleText>
                  <BodyText>{item.bodySection.left.textFeild3.text}</BodyText>
                </motion.div>

                <motion.div className="text-feild" 
                   initial={{ opacity: 0, y: -10 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   transition={{ type: "tween", duration: 1 }}>
                  <FooterTitleText>
                    {item.bodySection.left.textFeild4.subTitle}
                  </FooterTitleText>
                  <BodyText>{item.bodySection.left.textFeild4.text}</BodyText>
                </motion.div>

                <motion.div className="text-feild"
                   initial={{ opacity: 0, y: -10 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   transition={{ type: "tween", duration: 1 }}
                >
                  <FooterTitleText>
                    {item.bodySection.left.textFeild5.subTitle}
                  </FooterTitleText>
                  <BodyText>{item.bodySection.left.textFeild5.text}</BodyText>
                </motion.div>

                <motion.div className="text-feild"    initial={{ opacity: 0, y: -10 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ type: "tween", duration: 1 }}>
                  <FooterTitleText>
                    {item.bodySection.left.textFeild6.subTitle}
                  </FooterTitleText>
                  <BodyText>{item.bodySection.left.textFeild6.text}</BodyText>
                </motion.div>
              </div>

              <motion.div className="middle"
                 initial={{ opacity: 0, y: -10 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ type: "tween", duration: 1 }}
              >
                <h2>{item.bodySection.middle.title}</h2>
              </motion.div>

              <div className="right">
                <h2>{item.bodySection.right.title}</h2>
                <motion.div className="text-feild"
                   initial={{ opacity: 0, y: -10 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   transition={{ type: "tween", duration: 1 }}
                >
                  <FooterTitleText>
                    {item.bodySection.right.textFeild1.title}
                  </FooterTitleText>
                  <BodyText>{item.bodySection.right.textFeild1.text}</BodyText>
                </motion.div>

                <motion.div className="text-feild"
                   initial={{ opacity: 0, y: -10 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   transition={{ type: "tween", duration: 1 }}
                >
                  <FooterTitleText>
                    {item.bodySection.right.textFeild2.title}
                  </FooterTitleText>
                  <BodyText>{item.bodySection.right.textFeild2.text}</BodyText>
                </motion.div>

                <motion.div className="text-feild"
                   initial={{ opacity: 0, y: -10 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   transition={{ type: "tween", duration: 1 }}
                >
                  <FooterTitleText>
                    {item.bodySection.right.textFeild3.title}
                  </FooterTitleText>
                  <BodyText>{item.bodySection.right.textFeild3.text}</BodyText>
                </motion.div>
                <h2>{item.bodySection.right.textFeild4.title}</h2>
                <motion.div className="text-feild"
                   initial={{ opacity: 0, y: -10 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   transition={{ type: "tween", duration: 1 }}
                >
                  <BodyText>{item.bodySection.right.textFeild4.text}</BodyText>
                </motion.div>
              </div>
            </div>
          </DestinationSection>
        );
      })}
    </motion.Fragment>
  );
};

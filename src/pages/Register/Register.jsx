import React from "react";
import BG from "../../assets/img/header-bg.jpg";
import {  RegisterHeading, RegisterSection, RegisterSubHeading } from "./Register-styled";
import { FcGoogle } from "react-icons/fc";
import {  ColorButton } from "../../components/Navbar/Navbar-styled";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export const  Register = () => {
  const navigate = useNavigate();
  const navigateToLogin = () => {
    navigate('/login');
  }
  return (
    <motion.Fragment
    initial={{opacity:0}}
          whileInView={{ opacity: 1}}
          transition={{delay:0.2, type: "tween", duration:1}}
    >
      <RegisterSection imgUrl={BG}>
        <motion.div className="wrapper"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2,type: "tween", duration: 1 }}
        >
          <RegisterHeading >Create your Account!</RegisterHeading>
          <RegisterSubHeading>
          Dont Have an Account?  <h4 onClick={navigateToLogin}>Sign In!</h4>
          </RegisterSubHeading>
          <form action="">
          <input type="email" placeholder="Email" />
            <div className="two-input">
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
            </div>
            
            <div className="two-input">
            <input type="password" placeholder="Password" />
            <input type="password" placeholder="Confirm Password" />
            </div>
           
           
            
            <div className="bottom">
             
                <label>  By Registering You Confirm That You Accept Terms & Conditions and Privacy Policy</label>
                <input type="checkbox" />
             
              
            </div>
            <ColorButton className="form-btn">Register</ColorButton>
            <div className="form-g-btn">
            <FcGoogle className="icon" /> 
            </div>
            
          </form>
        </motion.div>
      </RegisterSection>
    </motion.Fragment>
  );
};

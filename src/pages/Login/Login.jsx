import React from "react";
import BG from "../../assets/img/header-bg.jpg";
import { LoginHeading, LoginSection, LoginSubHeading } from "./Login-styled";
import { FcGoogle } from "react-icons/fc";
import {  ColorButton } from "../../components/Navbar/Navbar-styled";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();
  const navigateToRegister = () =>{
    navigate('/register');

  }
  return (
    <motion.Fragment
    initial={{opacity:0}}
          whileInView={{ opacity: 1}}
          transition={{delay:0.2, type: "tween", duration:1}}
    >
      <LoginSection imgUrl={BG}>
        <motion.div className="wrapper"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: "tween", duration: 1 }}
        >
          <LoginHeading>Welcome Back Sign in to Continue</LoginHeading>
          <LoginSubHeading>
            Do not Have an Account? <h4 onClick={navigateToRegister} >Sign Up!</h4>
          </LoginSubHeading>
          <form action="">
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="password" />
            <div className="bottom">
              <div className="left">
                <label> Remember Me</label>
                <input type="checkbox" />
              </div>
              <div className="right">
                <a href="/">Forgot Password? </a>
              </div>
            </div>
            <ColorButton className="form-btn">Log in</ColorButton>
            <div className="form-g-btn">
            <FcGoogle className="icon" /> 
            </div>
            
          </form>
        </motion.div>
      </LoginSection>
    </motion.Fragment>
  );
};

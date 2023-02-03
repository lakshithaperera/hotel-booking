import React, { Fragment } from 'react';
import LOGO from "../../assets/img/logo.png";
import PROFILE from "../../assets/img/profile.png";
import { ColorButton, BorderButton, NavBar, MobileIcon } from './Navbar-styled';
import { Link } from 'react-router-dom';
import { CgProfile } from "react-icons/cg"
import { HiOutlineMenuAlt2} from "react-icons/hi"
import { AiOutlineClose } from "react-icons/ai"
import {useState} from 'react';
import { useMediaPredicate } from "react-media-hook";


export const Navbar = () => {

    const [isActive, setIsActive] = useState(true);
    const [isprofileActive, setisprofileActive] = useState(true);
    const handleClick = () => {
        setIsActive(current => !current);
      };


    const profileHandleClick = () => {
        setisprofileActive(current =>!current);
    }
    const lessThan1200 = useMediaPredicate("(max-width: 1200px)");

     

  return (
    <Fragment>
        <NavBar>
            <div className="wrapper">
            <div className="nav-left">
                <img src={LOGO} alt="" />
                <div className="nav-items"  style={
       {display : isActive && lessThan1200 ? "none" : "block"}
        }>
                    <AiOutlineClose className='nav-close' onClick={handleClick}  />
                <ul>
                    <li><Link to="hotel-booking">Home</Link></li>
                    <li><Link to="property">Properties</Link></li>
                    <li><Link to="explore" >Explore Sri Lanka</Link></li>
                    <li><Link to="careers">Careers</Link></li>
                    <li><Link to="blog">Blogs</Link></li>
                    <li><Link to="contact" >Contact</Link></li>
                </ul>
                </div>
              
            </div>

            <div className="nav-right">
                <div className="nav-btn">
                <Link to="login"><ColorButton>Sign In / Register </ColorButton></Link>
                <Link to="property-register"><BorderButton>List Your Property</BorderButton></Link>
                </div>
           
            <MobileIcon>
               <CgProfile onClick={profileHandleClick} className='icon profile-icon'/>
               <div className="profile-section"  style={
       {display : isprofileActive && lessThan1200 ? "none" : "block"}}>
               <AiOutlineClose className='profile-close'   onClick={profileHandleClick}/>
                <img src={PROFILE} alt="" />
                
                <h4>Lorem ipsum dolor sit amet.</h4>
                <hr />
                <h4>Lorem ipsum dolor sit amet.</h4>
               </div>
               <HiOutlineMenuAlt2 onClick={handleClick} className='icon mobile-menu'/>
            </MobileIcon>
            </div>
            </div>
           
        </NavBar>
    </Fragment>
  )
}

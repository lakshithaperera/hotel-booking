import React from 'react'
import LOGO from "../../assets/img/logo.png";
import { FooterBottom, FooterBottomLeft, FooterBottomRight, FooterSection, FooterText, FooterTextSmall, FooterTitleText, FooterTop, FooterTopLeft, FooterTopRight } from './Footer-styled'
import { FaFacebookF } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import  { MdOutlineArrowRight }  from "react-icons/md"

const Footer = () => {
  return (
  
        <FooterSection>
            <FooterTop>
                <FooterTopLeft>
                <div className="footer-left-bottom">
                        <div>
                        <FooterText><MdOutlineArrowRight className="icon" />Hotels in Colombo</FooterText>
                        <FooterText><MdOutlineArrowRight className="icon" />Hotels in Jaffna</FooterText>
                        <FooterText><MdOutlineArrowRight className="icon" />Hotels in Ratnapura</FooterText>
                        <FooterText><MdOutlineArrowRight className="icon" />Luxury Sailing Sri Lanka</FooterText>
                        </div>
                        <div>
                        <FooterText><MdOutlineArrowRight className="icon"/>Hotels in Ella Sri Lanka</FooterText>
                        <FooterText><MdOutlineArrowRight className="icon"/>Hotels in Nuwara Eliya</FooterText>
                        <FooterText><MdOutlineArrowRight className="icon"/>Hotels in Kurunegala</FooterText>
                        <FooterText><MdOutlineArrowRight className="icon"/>Hotels in Hambantota</FooterText>
                        </div>
                        <div>
                        <FooterText><MdOutlineArrowRight className="icon"/>Hotels in Galle</FooterText>
                        <FooterText><MdOutlineArrowRight className="icon"/>Hotels in Kandy</FooterText>
                        <FooterText><MdOutlineArrowRight className="icon"/>Hotels in Sigiriya</FooterText>
                        <FooterText><MdOutlineArrowRight className="icon" />Hotels in puttalam</FooterText>
                        </div>
                    </div>

                    <div className="footer-left-top">
                    <div className="contact">
                        <div className="tel">
                        <FooterTitleText>Free Customer Care </FooterTitleText>
                        <div className="text">
                            
                        <FooterTextSmall><b>SL</b>  011 2 10 20 40</FooterTextSmall>
                        <FooterTextSmall><b>AUS</b> AUS 61 (03) 9999 7450</FooterTextSmall>
                        <FooterTextSmall><b>LUX</b> 352 20 331 999</FooterTextSmall>
                        <FooterTextSmall> <b>UK</b> 44 752 06 44 688 </FooterTextSmall>

                        </div>
                        </div>
    
                    </div>
                

                    <div className="social-media">
                        <FooterTitleText>Follow us </FooterTitleText>
                        <div className="icons">
                            <FaFacebookF className='icon' />
                            <AiFillInstagram className='icon'/>
                        </div>
                    </div>
                    </div>

                   
                  
                </FooterTopLeft>
                <FooterTopRight>
                    <div className="footer-right-top">
                    <div className="subscribe-area">
                        <FooterTitleText>Get Updates & More</FooterTitleText>
                        <div className="input-area">
                            <input type="text" placeholder='Your Email'/>
                            <button className='subscribe-button'>subscribe</button>
                        </div>
                    </div>
                    </div>

                    <div className="footer-right-bottom">
                    <div>
                        <FooterTitleText>Company</FooterTitleText>
                        <FooterText className='footer-link'>About Us</FooterText>
                        <FooterText className='footer-link'>Careers</FooterText>
                        <FooterText className='footer-link'>Blog</FooterText>
                        <FooterText className='footer-link'>Press</FooterText>
                        <FooterText className='footer-link'>Gift Cards</FooterText>
                        <FooterText className='footer-link'>Magazine</FooterText>
                    </div>

                    <div>
                        <FooterTitleText >Support</FooterTitleText>
                        <FooterText className='footer-link'>Contact</FooterText>
                        <FooterText className='footer-link'>Legal Notice</FooterText>
                        <FooterText className='footer-link'>Privacy Policy</FooterText>
                        <FooterText className='footer-link'>Terms and Conditions</FooterText>
                        <FooterText className='footer-link'>Sitemap</FooterText>
                    </div>
                   

                    <div>
                        <FooterTitleText>Other Services</FooterTitleText>
                        <FooterText className='footer-link'>Car hire</FooterText>
                        <FooterText className='footer-link'>Activity Finder</FooterText>
                        <FooterText className='footer-link'>Tour List</FooterText>
                        <FooterText className='footer-link'>Flight finder</FooterText>
                        <FooterText className='footer-link'>Cruise Ticket</FooterText>
                        <FooterText className='footer-link'>Holiday Rental</FooterText>
                        <FooterText className='footer-link'>Travel Agents</FooterText>
                    </div>
                   
                    </div>
                   
                </FooterTopRight>
            </FooterTop>

            <FooterBottom>
                <FooterBottomLeft>
                   <FooterText>© 2023 GoTrip LLC All rights reserved.</FooterText>
                   <FooterText className='footer-link'>Privacy</FooterText>
                   <FooterText className='footer-link'>Terms</FooterText>
                   <FooterText className='footer-link'>Site Map</FooterText>
                </FooterBottomLeft>
                <FooterBottomRight>
                    <img src={LOGO} alt="" />
                </FooterBottomRight>
            </FooterBottom>
        </FooterSection>
    
  )
}

export default Footer
import React from 'react'
import { Star } from '../../components/Star/Star'
import { BodyText, SubHeading } from '../Home/Home-styled'
import { BookHeaderSection, BookPrice, BookSection, MapContainer } from './Book-styled'
import { HiOutlineLocationMarker } from 'react-icons/hi';
import {  ColorButton } from '../../components/Navbar/Navbar-styled';
import { BsArrowUpRight } from "react-icons/bs"
import RoomBookComponent from '../../components/RoomBook/RoomBook';
import {  DatePickerComponent } from '../../components/DatePicker/DatePicker';
import BookHotelsData from '../../data/BookhotelsData/BookHotelsData';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import ImgModal from '../../components/ImgModal/ImgModel';


const BookPage = () => {
  const { state } = useLocation();
  return (
    <motion.Fragment
    initial={{ opacity: 0}}
          whileInView={{ opacity: 1}}
          transition={{ delay: 0.2,type: "tween", duration: 1 }}
    >
        <BookSection>
         
             <motion.div className="wrapper"
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{type: "tween", duration: 1 }}
             >
             {BookHotelsData.filter(item => item.id === state.btnId).map((item) => {
              return(
                <BookHeaderSection>
                <div className="top">
                   <div className="left">
                       <div className='star'>
                           <SubHeading>{item.title}</SubHeading>
                           <Star />
                       </div>
                       <div className="address">
                           <HiOutlineLocationMarker className='icon' />
                           <BodyText className='text'>{item.address}</BodyText>
                       </div>
                   </div>
                   <div className="right">
                       <BodyText className='text'>From</BodyText>
                       <BookPrice >{item.price}</BookPrice>
                       <ColorButton className='price-btn'>Select Room
                       <BsArrowUpRight className='book-icon' />
                       </ColorButton>
                   </div>
                </div>
                <div className="book-bottom">
                     <div className="book-img img1">
                       <img src={item.img.img1} alt="" />
                     </div>
                     <div className="book-img img2">
                       <img src={item.img.img2} alt="" />
                     </div>
                     <div className="book-img img3">
                       <img src={item.img.img3} alt="" />
                     </div>
                     <div className="book-img img4">
                       <img src={item.img.img4} alt="" />
                     </div>
                     <div className="book-img img5">
                       <img src={item.img.img2} alt="" />
                     </div>
                     <div className='img-model'>
                      <ImgModal />
                     </div>
                </div>    
           </BookHeaderSection> 
              )
             })}
                
                <div>
          
                </div>        
            </motion.div> 
        </BookSection>
       <div>
       <DatePickerComponent />
       <MapContainer>
            <div className="left"></div>
            <div className="right">
            
            </div>
       </MapContainer>
        <RoomBookComponent />
       </div>
    </motion.Fragment>
  )
}

export default BookPage;

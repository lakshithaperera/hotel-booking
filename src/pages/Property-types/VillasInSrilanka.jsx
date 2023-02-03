import React, { Fragment } from 'react'
import { ColorButton } from '../../components/Navbar/Navbar-styled'
import { Propertie, PropertieLeft, PropertieRight, PropertiesSec, SideBar } from './Properties-styled'
import { BsArrowUpRight } from "react-icons/bs";
import PropertyData from '../../data/PropertyData/PropertyData';
import { motion } from 'framer-motion';
import  { BiSearch } from "react-icons/bi"

export const VillasInSrilanka = () => {
  return (
    <Fragment>
      <PropertiesSec>
      <motion.div className="wrapper"
       initial={{opacity:0}}
       whileInView={{ opacity: 1}}
       transition={{delay:0.2, type: "tween", duration:1}}
      >
        <div className="side-bar">
        <SideBar>
             <h4>Search Hotel</h4>
             <div className="input-field">
             <label >Location</label>
             <input type="text" placeholder='Where are you going' />
             </div>

             <div className="input-field">
             <label >Check in - Check out</label>
             <input type="date" placeholder='Wed 2 Mar - Fri 11 Apr' />
             </div>

             <div className="input-field">
             <label >Guest</label>
             <p className='text'>2 adults - 1 childeren - 1 room</p>
             </div>
             <ColorButton className='btn'>Search<BiSearch className='icon' /></ColorButton>

        </SideBar>
        <SideBar>
          <h4>Search by property name</h4>
          <div className="input-area">
            <BiSearch className='icon' />
            <input type="text" placeholder='E.g Best Western' />
          </div>
        </SideBar>
        </div>
    
        <div className='property-sec'>
        {PropertyData.map((item) => {
        return(
          
        <motion.div
        initial={{  opacity: 0, y:-10 }}
         whileInView={{ opacity: 1, y:0}}
         transition={{delay:0.2,type: "tween", duration:1}}
        >
               <Propertie>
            <PropertieLeft>
               {item.slide}
            </PropertieLeft>
 
          
 
            <PropertieRight>
             <div className="top">
             <h4 className="title">
                {item.title}
                </h4>
               {item.star}
             </div>
                <p className="text">{item.text}</p>
                <h3 className="price">{item.price}</h3>
                <ColorButton className='book-btn'>Book now   <BsArrowUpRight className='book-icon' /></ColorButton>
            </PropertieRight>
          </Propertie>

        </motion.div>
                 
        )
      })}  
        </div>
 
         </motion.div>
      </PropertiesSec>
    </Fragment>
  )
}

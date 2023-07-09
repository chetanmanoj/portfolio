import React from 'react'
import {motion} from 'framer-motion'
import { useMediaQuery } from 'react-responsive'

import { cardData } from '../constants'


const Card = (
    props
) => {
  const isMobile= useMediaQuery({
    query: '(max-width: 450px)'
  })
  if(isMobile){
    return(
      <div className='flex flex-col items-center border-2 border-solid border-[#65f5ff] rounded-lg  p-4 mb-12'>
        <div className='flex flex-col items-center border-b-2 pb-6 w-11/12 border-[#65f5ff]'>
      <img src={props.titleIcon} className='flex w-11 h-11'/>
      <div className='text-center'>{props.title}</div>
      </div>
      <div className='flex flex-col mt-4'>
      {props.itemIcon.map((icon, index) => (
      <div className="flex flex-col items-center justify-evenly " key={index}>
        {/* <img src={icon} className="flex w-11 h-11" alt="Item Icon" /> */}
        <div>{props.items[index]}</div>
      </div>
    ))}
      </div>
      
  </div>
    )
      }
    else{
      return(
        <motion.div 
          whileHover={{boxShadow:"0px 0px 15px rgb(101,245,255)",
          // scale:1.02
        }}
          className='flex flex-row border-2 border-solid border-[#65f5ff] rounded-lg h-40 p-4 mb-12'>
        <div className='flex flex-col items-center justify-evenly w-3/12 p-4 border-r-2 border-[#65f5ff] mr-8'>
      <img src={props.titleIcon} className='flex w-16 h-16'/>
      <div className='text-center text-md'>{props.title}</div>
      </div>
      <div className='flex flex-row text-center overflow-auto gap-11 w-9/12'>
      {props.itemIcon.map((icon, index) => (
      <div className="flex flex-col items-center justify-evenly" key={index}>
        <img src={icon} className="flex w-11 h-11" alt="Item Icon" />
        <div>{props.items[index]}</div>
      </div>
    ))}
      </div>
      
  </motion.div>
      )
    }
}

const Skills = () => {
    
  return (
    <section 
    id='skills'
    className='h-full w-10/12'
    >
    <div className="flex flex-col items-center justify-center">
        <span className="text-[3.5rem] font-bold text-[#65f5ff]">SKILLS</span>
        <div className="w-10/12 flex flex-col mt-8">
        {cardData.map((cardData) => (
             <Card
              titleIcon = {cardData.titleIcon}
              title = {cardData.title}
              itemIcon = {cardData.itemIcon}
              items = {cardData.items}
             />
          ))}
          
        
        </div>
      </div>
    </section>
  )
}

export default Skills
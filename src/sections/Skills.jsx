import React from 'react'

import { cardData } from '../constants'


const Card = (
    props
) => {
    return(
      <div className='flex flex-row border-2 border-solid border-[#65f5ff] rounded-lg h-36 p-4 mb-12'>
        <div className='flex flex-col items-center justify-evenly  w-3/12  border-r-2 border-[#65f5ff] mr-8'>
      <img src={props.titleIcon} className='flex w-11 h-11'/>
      <div className='text-center'>{props.title}</div>
      </div>
      <div className='flex flex-row  gap-10 w-9/12'>
        {/* <div className='flex flex-col'>
      <img src={props.itemIcon} className='flex w-11 h-11'/>
      <div>{props.items}</div>
      </div> */}
      {props.itemIcon.map((icon, index) => (
      <div className="flex flex-col items-center justify-evenly" key={index}>
        <img src={icon} className="flex w-11 h-11" alt="Item Icon" />
        <div>{props.items[index]}</div>
      </div>
    ))}
      </div>
      
  </div>
    )
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
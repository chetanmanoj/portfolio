import React from 'react'

import { cardData } from '../constants'


const Card = (
    props
) => {
    return(
      <div className='flex flex-row border-2 border-solid border-[#65f5ff] rounded-lg p-12 mb-12'>
        <div className='flex flex-col items-center justify-center  w-3/12  border-r-2 border-[#65f5ff] mr-8'>
      <img src={props.titleIcon} className='flex w-11 h-11 text-[#65f5ff]'/>
      <div className='flex  '>{props.title}</div>
      </div>
      <div>
      <div>{props.items}</div>
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
              items = {cardData.items}
             />
          ))}
          
        
        </div>
      </div>
    </section>
  )
}

export default Skills
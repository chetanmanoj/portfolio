import React from 'react'

import { cardData } from '../constants'


const Card = (
    header,title,items
) => {
    return(
    <div className='bg-black h-[25rem] w-[21rem] flex flex-col items-center '>
        <div>{header}</div>
        <div className='flex flex-col'>
             <span className='font-bold'>{title}</span>
            {/* <span>{items.map()}</span>  */}
            {items.map((item) => (
          <span>{item}</span>
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
        <div className="w-10/12 flex flex-row mt-8">
        {cardData.map((card, index) => (
             <Card
              key={index}
              {...card}
             />
          ))}

        </div>
      </div>
    </section>
  )
}

export default Skills
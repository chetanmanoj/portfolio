import React, { useState } from 'react'
// import { useMediaQuery } from 'react-responsive'

import CaroItem from '../components/CaroItem'
import { caroItem } from '../constants'

const Works = () => {
  const[activeIndex, setActiveIndex] = useState(0)
  return (
    <section
        id='works'
        className='h-full w-10/12 mb-32'
    >
        <div className="flex flex-col items-center justify-center">
        <span className="text-[3.5rem] font-bold text-[#65f5ff] mt-16">WORKS</span>
        <div style={{transform: `translate:(-${activeIndex*100})`}} className='mt-8 flex flex-wrap w-10/12 gap-7 justify-center'>
        {caroItem.map((item) => {
          return <CaroItem item= {item}/>
        })}
        </div>
        </div>
    </section>
  )
}

export default Works
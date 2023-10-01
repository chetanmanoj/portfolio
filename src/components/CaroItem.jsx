import React from 'react'
import {motion} from 'framer-motion'

const CaroItem = ({item}) => {
  return (
    <motion.button 
    whileHover={{boxShadow:"0px 0px 15px rgb(101,245,255)",
    scale:1.02
  }}
    className='rounded-xl'
    >
    <motion.div className='flex flex-col h-[14.7rem] overflow-hidden w-[25rem] border-4 border-solid border-[#65f5ff] rounded-lg p-2 text-center items-center'
        onClick={()=>window.open(item.gitlink)}
        whileHover={{height:'23.5rem',  transition: { duration: 0.5 } }}
    >
      {/* 26.5rem */}
        <div className='h-8/12'>
        <img src={item.image} className='bg-black h-8/12 rounded-md'/>
        </div>
        
        <div className='font-bold text-[2rem] mt-2'>{item.title}</div>
        <div className='w-11/12 text-[#65f5ff]'>{item.description}</div>
        
        {/* <a onClick={()=>window.open(item.gitlink)}>
        <button>
            hi
        </button>
        </a> */}
    </motion.div>
    </motion.button> 
  )
}

export default CaroItem
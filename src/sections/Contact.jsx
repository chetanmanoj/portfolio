import React from 'react'
import {motion} from 'framer-motion'

const Contact = () => {
  return (
    <motion.section id='contact'
      className='h-full w-10/12 bg-transparent border-4 border-solid border-[#65f5ff] rounded-3xl flex justify-center mb-24'
      initial={{x:-150}}
      animate={{x:0}}
    >
      <div className='w-11/12 my-12'>
        <span className='text-[2.5rem] font-bold'>Do you have any enquiries?</span> 
        <form className='mt-8 mx-8'>
        <div className='flex flex-row mb-12'>
        
        <input
          type='text'
          name='name'
          placeholder='Your name'
          className='w-[26.25rem] h-[2.5rem] pl-4 rounded-xl bg-white text-black outline-none'
        />
        <input
          type='email'
          name='email'
          placeholder='Your email'
          className='w-[26.25rem] h-[2.5rem] pl-4 rounded-xl bg-white text-black outline-none ml-32'
        />
        </div>
        <div>
          <input
            type='text'
            name='message'
            placeholder='What would you like to say?'
            className='w-full h-[12.5rem] mb-12 pl-4 rounded-xl bg-white text-black outline-none pb-[9.625rem]' 
          />
        </div>
        <motion.button
        whileHover={{backgroundColor:'#65f5ff', color:'black'}}
        transition={{duration:0.2}}
        className='h-[3.438rem] w-36 text-[1.063rem] rounded-xl border-2 border-[#65f5ff]'
        >
        SUBMIT
        </motion.button>
          
        </form>
      </div>
    </motion.section>
  )
}

export default Contact
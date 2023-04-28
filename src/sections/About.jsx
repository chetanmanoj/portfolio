import React from 'react'
import {motion} from 'framer-motion'
import {FaGithub, FaLinkedinIn, FaEnvelope} from 'react-icons/fa'

const About = () => {
  return (
    <motion.section 

    id='about' 
    className='bg-transparent w-10/12 flex h-[600px] mt-8 '
    initial={{opacity:0, x:-150}}
    animate={{opacity:1, x:0}}
    transition={{duration:1}}
    >
        <div className='flex flex-1 items-center justify-center flex-col'>
            <span className='text-[75px] text-white font-bold'>CHETAN MANOJ</span>
            <span className='text-[#65f5ff] text-[45px]'>WEB DEVELOPER</span>
            <a href='https://drive.google.com/file/d/1ajd4MBXQUU0-XF-AzeX3_HwDz5_ZLyhC/view?usp=share_link'
            className='mt-24'
            >
            <button className='bg-[#65f5ff] w-[200px] font-bold h-[50px] rounded-3xl  '>View My CV</button>
            </a>
            <div className='flex flex-row mt-8 gap-8'>
            <a href='https://github.com/chetanmanoj'>
            <button className='flex items-center justify-center text-white text-[25px] rounded-[30px] border-solid border-2 h-[57px] w-[57px] border-[#65f5ff] hover:border-0 hover:bg-black hover:text-[#65f5ff] transition-75'>
            <FaGithub/>
            </button>
            </a>
            <a href='https://www.linkedin.com/in/chetan-manoj/'>
            <button className='flex items-center justify-center text-white text-[25px] rounded-[30px] border-solid border-2 h-[57px] w-[57px] border-[#65f5ff] hover:border-0 hover:bg-black hover:text-[#65f5ff] transition-75'>
            <FaLinkedinIn/>
            </button>
            </a>
            <a href='mailto:chetanmanoj2001@gmail.com'>
            <button className='flex items-center justify-center text-white text-[25px] rounded-[30px] border-solid border-2 h-[57px] w-[57px] border-[#65f5ff] hover:border-0 hover:bg-black hover:text-[#65f5ff] transition-75'>
            <FaEnvelope/>
            </button>
            </a>
            </div>
        </div>
    </motion.section>
  )
}

export default About
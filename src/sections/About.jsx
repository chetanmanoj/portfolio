import React from 'react'
import {motion} from 'framer-motion'

const About = () => {
  return (
    <motion.section 

    id='about' 
    className='bg-white w-10/12 flex h-[600px] mt-8 '>
        <div className='flex flex-1 items-center justify-center flex-col'>
            <span className='text-[75px] font-bold'>CHETAN MANOJ</span>
            <span>WEB DEVELOPER</span>
            <a href='https://drive.google.com/file/d/1ajd4MBXQUU0-XF-AzeX3_HwDz5_ZLyhC/view?usp=share_link'>
            <button className='bg-red-200 w-[200px] h-[50px] rounded-3xl mt-24'>View My CV</button>
            </a>
            <div className='flex flex-row mt-8 gap-8'>
            <a href='https://github.com/chetanmanoj'>
            <button>Git</button>
            </a>
            <a href='https://www.linkedin.com/in/chetan-manoj/'>
            <button>LinkedIn</button>
            </a>
            <a href='mailto:chetanmanoj2001@gmail.com'>
            <button>Email</button>
            </a>
            </div>
        </div>
    </motion.section>
  )
}

export default About
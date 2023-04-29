import React from 'react'
import {motion} from 'framer-motion'
import {FaGithub, FaLinkedinIn, FaEnvelope} from 'react-icons/fa'

const About = () => {
  return (
    <motion.section 

    id='about' 
    className='bg-transparent w-10/12 flex h-[600px] mt-8 mb-16'
    initial={{opacity:0, x:-150}}
    animate={{opacity:1, x:0}}
    transition={{duration:1}}
    >
        <div className='flex flex-1 items-center justify-center flex-col'>
            <span className='text-[75px] text-white font-bold'>CHETAN MANOJ</span>
            <span className='text-[#65f5ff] text-[45px]'>WEB DEVELOPER</span>
            <a onClick={()=>window.open('https://drive.google.com/file/d/1ajd4MBXQUU0-XF-AzeX3_HwDz5_ZLyhC/view?usp=share_link')}
            className='mt-24'
            >
            <motion.button 
              className='bg-[#65f5ff] text-black w-[200px] font-bold h-[50px] rounded-3xl'
              whileHover={{boxShadow:"0px 0px 12px rgb(255,255,255)",
              border:'1px solid white',
              scale:1.05,
            }}
              >
                View My CV
            </motion.button>
            </a>
            <div className='flex flex-row mt-8 gap-8'>
            <a onClick={()=>window.open('https://github.com/chetanmanoj')}>
            <motion.button 
            whileHover={{scale:1.05, border:'1px solid white'}}
            className='flex items-center justify-center text-white text-[25px] rounded-[30px] border-solid border-2 h-[57px] w-[57px] border-[#65f5ff] hover:border-0 hover:bg-black hover:text-[#65f5ff] transition-75'>
            <FaGithub/>
            </motion.button>


            </a>
            <a onClick={()=>window.open('https://www.linkedin.com/in/chetan-manoj/')}>
            <motion.button 
            whileHover={{scale:1.05, border:'1px solid white'}}
            className='flex items-center justify-center text-white text-[25px] rounded-[30px] border-solid border-2 h-[57px] w-[57px] border-[#65f5ff] hover:border-0 hover:bg-black hover:text-[#65f5ff] transition-75'>
            <FaLinkedinIn/>
            </motion.button>


            </a>
            <a onClick={()=>window.open('mailto:chetanmanoj2001@gmail.com')}>
            <motion.button 
            whileHover={{scale:1.05, border:'1px solid white'}}
            className='flex items-center justify-center text-white text-[25px] rounded-[30px] border-solid border-2 h-[57px] w-[57px] border-[#65f5ff] hover:border-0 hover:bg-black hover:text-[#65f5ff] transition-75'>
            <FaEnvelope/>
            </motion.button>


            </a>
            </div>
        </div>
    </motion.section>
  )
}

export default About
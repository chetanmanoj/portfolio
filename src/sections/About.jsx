import React, {useState, useEffect} from 'react'
import {motion} from 'framer-motion'
import {FaGithub, FaLinkedinIn, FaEnvelope} from 'react-icons/fa'

const About = () => {

  const headlines = ['COMPUTER SCIENCE ENGINEER', 'WEB DEVELOPER']

  const [currentIndex, setCurrentIndex] = useState(0)
  const[currentHead,setCurrentHead] = useState(headlines[currentIndex])
  

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % headlines.length)
    }, 5000)
    return () => clearInterval(intervalId)
  },[currentIndex, headlines.length])

  useEffect(() => {
    setCurrentHead(headlines[currentIndex]);
  }, [currentIndex, headlines]);

  return (
    <motion.section 

    id='home' 
    className='bg-transparent w-10/12 flex h-[37.5rem] mt-[6.1rem] mb-16'
    initial={{opacity:0, x:-150}}
    animate={{opacity:1, x:0}}
    transition={{duration:1}}
    >
        <div className='flex flex-1 items-center justify-center flex-col'>
            <span className='text-[4.68rem] text-white font-bold'>CHETAN MANOJ</span>
            <motion.span 

            className='text-[#65f5ff] text-[2.8rem]'>
              {currentHead}</motion.span>
            <a onClick={()=>window.open('https://drive.google.com/file/d/1ajd4MBXQUU0-XF-AzeX3_HwDz5_ZLyhC/view?usp=share_link')}
            className='mt-24'
            >
            <motion.button 
              className='bg-[#65f5ff] text-black w-[12.5rem] font-bold h-[3.125rem] rounded-3xl'
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
            className='flex items-center justify-center text-white text-[1.563rem] rounded-[1.875rem] border-solid border-2 h-[3.563rem] w-[3.563rem] border-[#65f5ff] hover:border-0 hover:bg-black hover:text-[#65f5ff] transition-75'>
            <FaGithub/>
            </motion.button>


            </a>
            <a onClick={()=>window.open('https://www.linkedin.com/in/chetan-manoj/')}>
            <motion.button 
            whileHover={{scale:1.05, border:'1px solid white'}}
            className='flex items-center justify-center text-white text-[1.563rem] rounded-[1.875rem] border-solid border-2 h-[3.563rem] w-[3.563rem] border-[#65f5ff] hover:border-0 hover:bg-black hover:text-[#65f5ff] transition-75'>
            <FaLinkedinIn/>
            </motion.button>


            </a>
            <a onClick={()=>window.open('mailto:chetanmanoj2001@gmail.com')}>
            <motion.button 
            whileHover={{scale:1.05, border:'1px solid white'}}
            className='flex items-center justify-center text-white text-[1.563rem] rounded-[1.875rem] border-solid border-2 h-[3.563rem] w-[3.563rem] border-[#65f5ff] hover:border-0 hover:bg-black hover:text-[#65f5ff] transition-75'>
            <FaEnvelope/>
            </motion.button>


            </a>
            </div>
        </div>
    </motion.section>
  )
}

export default About
import React, {useState} from 'react'
import {motion} from 'framer-motion'
import { Link } from 'react-router-dom'


import { navLinks } from '../constants'

const NavBar = () => {
  const[active, setActive] = useState('')
  
  return (
    <motion.div className='bg-[#091b29] w-screen fixed h-[80px]  rounded-b-[35px] text-[19px] flex flex-row items-center justify-between'
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{duration:1}}
    >
      <Link
          to='/'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
      <button className='flex justify-start items-start ml-12'
     
      >
      CHET
      </button>
      </Link>
      
     <ul className='list-none flex justify-end text-white items-end flex-row gap-[40px] mr-12'>
     {navLinks.map((nav) => (
     <li
      key={nav.id}
       className={`hover:text-[#65f5ff] duration-[500ms] ${
         active === nav.title ? "text-[#65f5ff]" : "text-white"
       }`}
      onClick={() => {setActive(nav.title);}}
      >
     <a href={`#${nav.id}`}>{nav.title}</a>
     </li>
      ))}
     </ul>
    </motion.div>
  )
}

export default NavBar
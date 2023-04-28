import React, {useState} from 'react'
import {motion} from 'framer-motion'

import { navLinks } from '../constants'

const NavBar = () => {
  const[active, setActive] = useState('')
  
  return (
    <motion.div className='bg-transparent h-[80px] rounded-b-[35px] text-[19px] flex flex-row-reverse items-center'
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{duration:1}}
    >
     <ul className='list-none flex justify-end text-white items-start flex-row gap-[40px] mr-12'>
     {navLinks.map((nav) => (
     <li
      key={nav.id}
       className={`hover:text-red-400 duration-[500ms] ${
         active === nav.title ? "text-red-400 underline" : "text-white"
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
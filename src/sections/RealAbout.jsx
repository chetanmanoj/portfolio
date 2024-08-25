import React from "react";
import { useMediaQuery } from 'react-responsive'
import {motion} from 'framer-motion'
import { chet } from "../assets";

const RealAbout = () => {
  const isMobile= useMediaQuery({
    query: '(max-width: 900px)'
  })
  if(isMobile){
  return (
    <section
      id="about"
      className="h-full flex w-10/12 items-center justify-center mb-12"
    >
      <div className="flex flex-col items-center justify-center ">
        <span className="text-[3.5rem] font-bold text-[#65f5ff] mt-16">ABOUT ME</span>
        <div className="w-10/12 flex flex-col gap-12 mt-8">
        <img src={chet} alt="Chetan"/>
          <p className="flex text-[1.2rem] text-justify">
            Hello there! I'm Chetan Manoj, an aspiring web developer with a deep
            passion for crafting digital experiences. My goal is to bring ideas
            to life by seamlessly blending design and functionality, creating
            user-friendly and visually appealing websites while ensuring the utilization of 
            best development tools and techniques so that the code can be clean and optimized.
            I value the unique visions of my clients and strive to translate them into digital realities 
            and work hard in collaborating with my team mates to deliver the best output.
          </p>
         
        </div>
      </div>
    </section>
  );
  }
  else{
    return (
      <section
        id="about"
        className="h-full flex w-10/12 items-center justify-center mb-[5rem]"
        
      >
        <motion.div
          initial={{ opacity: 0, }}
          whileInView={{ opacity: 1, }}
          transition={{duration:0.8}}
          viewport={{ once: true }}
        className="flex flex-col items-center justify-center mt-28 mb-12 py-12 border-2 border-solid border-[#65f5ff] rounded-lg">
          <span className="text-[3.5rem] mb-4 font-bold text-[#65f5ff]">ABOUT ME</span>
          <div className="w-10/12 flex flex-row items-center gap-12 mt-8">
            <p className="flex flex-1 text-[1.35rem] text-justify">
              Hello there! I'm Chetan Manoj, an aspiring web developer with a deep
              passion for crafting digital experiences. My goal is to bring ideas
              to life by seamlessly blending design and functionality, creating
              user-friendly and visually appealing websites while ensuring the utilization of 
              best development tools and techniques so that the code can be clean and optimized.
              I value the unique visions of my clients and strive to translate them into digital realities 
              and work hard in collaborating with my team mates to deliver the best output.
            </p>
            <img src={chet} alt="Chetan" className="h-[20rem]"/>
          </div>
        </motion.div>
      </section>
    );
  }
};

export default RealAbout;

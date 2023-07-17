import React from "react";
import { useMediaQuery } from 'react-responsive'

const RealAbout = () => {
  const isMobile= useMediaQuery({
    query: '(max-width: 900px)'
  })
  if(isMobile){
  return (
    <section
      id="about"
      className="h-full flex w-10/12 items-center justify-center"
    >
      <div className="flex flex-col items-center justify-center">
        <span className="text-[3.5rem] font-bold text-[#65f5ff]">ABOUT ME</span>
        <div className="w-10/12 flex flex-row mt-8">
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
        className="h-full flex w-10/12 items-center justify-center mb-16"
      >
        <div className="flex flex-col items-center justify-center">
          <span className="text-[3.5rem] font-bold text-[#65f5ff]">ABOUT ME</span>
          <div className="w-10/12 flex flex-row mt-8">
            <p className="flex flex-1 text-[1.2rem] text-justify">
              Hello there! I'm Chetan Manoj, an aspiring web developer with a deep
              passion for crafting digital experiences. My goal is to bring ideas
              to life by seamlessly blending design and functionality, creating
              user-friendly and visually appealing websites while ensuring the utilization of 
              best development tools and techniques so that the code can be clean and optimized.
              I value the unique visions of my clients and strive to translate them into digital realities 
              and work hard in collaborating with my team mates to deliver the best output.
            </p>
            {/* <div className="flex flex-1">
              fdasf
            </div> */}
          </div>
        </div>
      </section>
    );
  }
};

export default RealAbout;

import NavBar from "./components/NavBar";

import About from "./sections/About";
import RealAbout from "./sections/RealAbout";
import Skills from "./sections/Skills";
import Works from "./sections/Works";

import { useMediaQuery } from 'react-responsive'

function Compile() {
  const isMobile= useMediaQuery({
    query: '(max-width: 900px)'
  })
  if(!isMobile){
  return (
    <div className="h-full w-full bg-[#091b29]">
      <NavBar />
      <div className="flex flex-col justify-center items-center">
        <About />
        <RealAbout />
        <Skills />
        <Works />
      </div>
    </div>
  );
}
else{
  return (
    <div className="h-full w-full bg-[#091b29]">
      <div className="flex flex-col justify-center items-center">
        <About />
        <RealAbout />
        <Skills />
        <Works />
      </div>
    </div>
  );
}
}

export default Compile;

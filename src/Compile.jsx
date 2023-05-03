import NavBar from "./components/NavBar";

import About from "./sections/About";
import RealAbout from "./sections/RealAbout";
import Skills from "./sections/Skills";
import Works from "./sections/Works";
import Contact from "./sections/Contact";

function Compile() {
  return (
    <div className="h-full w-full bg-[#091b29]">
      <NavBar />
      <div className="flex flex-col justify-center items-center">
        <About />
        <RealAbout />
        {/* <Skills /> */}
        <Works />
        <Contact />
      </div>
    </div>
  );
}

export default Compile;

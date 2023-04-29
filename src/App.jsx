import NavBar from "./components/NavBar"

import About from "./sections/About"
import Contact from "./sections/Contact"

function App() {
  

  return (
    // <div>
    <div className='h-full w-full bg-[#091b29]'> 
     <NavBar/>
     <div className="flex flex-col justify-center items-center">
     <About/>
     <Contact/>
     </div>
    </div>
    
    //  </div> 
  )
}

export default App

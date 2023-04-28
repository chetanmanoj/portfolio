import NavBar from "./components/NavBar"

import About from "./sections/About"
import Contact from "./sections/Contact"

function App() {
  

  return (
    <div className='h-screen w-screen bg-[#091b29]'> 
     <NavBar/>
     <div className="flex justify-center items-center">
     <About/>
     </div>
     <Contact/>
    </div>
  )
}

export default App

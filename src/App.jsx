import "../public/css/reset.css";
import "../public/css/common.css";
import Cursor from "./components/Cursor";
import Visual from "./components/Visual";
import History from "./components/History";
import Project from "./components/Project";
import Skiils from "./components/Skills";
import Footer from "./components/Footer";
import {useState} from "react";

function App() {

  const [mousePosition, setMousePosition] = useState({x: null, y:null})
  const handleMouseMove = (e) => {
    setMousePosition({x: e.clientX, y:e.clientY})
  }

  return (
    <div 
     className="app-cont" 
     onMouseMove={handleMouseMove} 
     >
      <Visual />
      <History />
      <Project />
      <Skiils />
      <Footer />
      <Cursor 
        left={mousePosition.x} 
        top={mousePosition.y} />
    </div>
  )
}

export default App

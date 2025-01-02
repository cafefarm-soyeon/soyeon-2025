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

  // 커서 위치
  const [mousePosition, setMousePosition] = useState({x: null, y:null})
  const handleMouseMove = (e) => {
    setMousePosition({x: e.clientX, y:e.clientY})
  }
 // 커서 클래스
  const [mouseClassName, setMouseClassName] = useState('normal');
  const mouseClassOn = () => {
    setMouseClassName('extend');
  }
  const mouseClassOff = () => {
    setMouseClassName('');
  }

  return (
    <div 
     className="app-cont" 
     onMouseMove={handleMouseMove} 
     >
      <Visual />
      <History mouseClassOn={mouseClassOn} mouseClassOff={mouseClassOff} />
      <Project mouseClassOn={mouseClassOn} mouseClassOff={mouseClassOff} />
      <Skiils mouseClassOn={mouseClassOn} mouseClassOff={mouseClassOff} />
      <Footer />
      <Cursor 
        left={mousePosition.x} 
        top={mousePosition.y}
        mouseClassName={mouseClassName} />
    </div>
  )
}

export default App

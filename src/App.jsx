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

  // 화면 커서 위치
  const [mousePosition, setMousePosition] = useState({x: null, y:null})
  const handleMouseMove = (e) => {
    setMousePosition({x: e.clientX, y:e.clientY})
  }
 // 커서 클래스 on/off
  const [mouseName, setMouseName] = useState('normal');
  const mouseOn = () => {
    setMouseName('extend');
  }
  const mouseOff = () => {
    setMouseName('');
  }

  return (
    <div 
     className="app-cont" 
     onMouseMove={handleMouseMove} 
     >
      <Visual />
      <History mouseOn={mouseOn} mouseOff={mouseOff} />
      <Project mouseOn={mouseOn} mouseOff={mouseOff} />
      <Skiils mouseOn={mouseOn} mouseOff={mouseOff} />
      <Footer />
      <Cursor 
        left={mousePosition.x} 
        top={mousePosition.y}
        mouseName={mouseName} />
    </div>
  )
}

export default App

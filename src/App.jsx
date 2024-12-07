import "../public/css/reset.css";
import "../public/css/common.css";
import Cursor from "./components/Cursor";
import Visual from "./components/Visual";
import History from "./components/History";
import Project from "./components/Project";
import Skiils from "./components/Skills";
import Footer from "./components/Footer";

function App() {

  return (
    <>
      <Visual />
      <History />
      <Project />
      <Skiils />
      <Footer />
      <Cursor />
    </>
  )
}

export default App

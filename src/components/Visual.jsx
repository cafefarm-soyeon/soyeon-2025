import { useRef } from "react";

const Visual = () => {
  
  const cloud1 = useRef(null);
  const cloud2 = useRef(null);
  const cloud3 = useRef(null);
  const forest = useRef(null);
  const forestBg = useRef(null);
  const sun = useRef(null);
  const bird = useRef(null);
  const river = useRef(null);
  const text = useRef(null);

  window.addEventListener('scroll', function(){
    let value = window.scrollY;

    cloud1.current.style.setProperty('top', value * - 0.2 + "px");
    cloud2.current.style.setProperty('top', value * - 0.1 + "px");
    cloud3.current.style.setProperty('top', value * 0.4 + "px");

    forest.current.style.setProperty('top', value * - 0.25 + "px");
    forestBg.current.style.setProperty('height', value * 0.3 + "px");

    sun.current.style.setProperty('top', value * 0.7 + "px");
    bird.current.style.setProperty('top', value * -0.25 + "px");


    river.current.style.setProperty('top', value * -0.15 + "px");
    text.current.style.setProperty('margin-top', value * 0.7 + "px");

  });

  return(
    <>
    <section className="curtain">
      <div className="left"></div>
      <div className="right"></div>
    </section>
    <section className="part visual">
      <img src="../../public/image/cloud1.png" alt="구름1" ref={cloud1} />
      <img src="../../public/image/cloud2.png" alt="구름2" ref={cloud2} />
      <img src="../../public/image/cloud3.png"  alt="구름3" ref={cloud3} />
      <div className="space stars1 "></div>
      <div className="space stars2"></div>
      <div className="space stars3"></div>
      <img src="../../public/image/sun.png" alt="해" ref={sun}/>
      <img src="../../public/image/mountain1.png" alt="산1" />
      <img src="../../public/image/mountain2.png" alt="산2" />
      <p className="visual-text" ref={text} >Soyeon&#39;s Home</p>
      <img src="../../public/image/river.png" alt="강" ref={river} />
      <img src="../../public/image/mountain3.png" alt="산3" />
      <img src="../../public/image/mountain4.png" alt="산4" />
      <img src="../../public/image/forest.png" className="forest" alt="숲" ref={forest}  />
      <div className="forestBg" ref={forestBg}></div>
      <img src="../../public/image/bird.png" className="bird" alt="새" ref={bird} />
    </section>
    </>
  );
}
export default Visual;
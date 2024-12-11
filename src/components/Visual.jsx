import { useRef } from "react";

const Visual = () => {
  
  const cloud1 = useRef(null);
  const cloud2 = useRef(null);
  const cloud3 = useRef(null);
  const forest = useRef(null);
  const forestBg = useRef(null);
  const sun = useRef(null);
  const splash1 = useRef(null);
  const splash2 = useRef(null);
  const river = useRef(null);
  const text = useRef(null);
  const bird1 = useRef(null);
  const bird2 = useRef(null);

  window.addEventListener('scroll', function(){
    let value = window.scrollY;

    cloud1.current.style.setProperty('top', value * - 0.2 + "px");
    cloud2.current.style.setProperty('top', value * - 0.1 + "px");
    cloud3.current.style.setProperty('top', value * 0.4 + "px");
    sun.current.style.setProperty('top', value * 0.7 + "px");

    forest.current.style.setProperty('top', value * - 0.25 + "px");
    forestBg.current.style.setProperty('height', value * 0.3 + "px");

    splash1.current.style.setProperty('top', value * -0.53 + "px");
    splash2.current.style.setProperty('top', value * -0.53 + "px");
    river.current.style.setProperty('top', value * -0.15 + "px");
    text.current.style.setProperty('margin-top', value * 0.7 + "px");

    bird1.current.style.setProperty('top', value * -0.7 + "px");
    bird1.current.style.setProperty('left', value * 0.8 + "px");
    bird2.current.style.setProperty('top', value * -0.6 + "px");
    bird2.current.style.setProperty('left', value * 0.6 + "px");

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
      <p className="visual-text" ref={text} >Soyeon&#39;s Home</p>
      <img src="../../public/image/splash01.png" ref={splash1} alt="물방울1" />
      <img src="../../public/image/splash02.png" ref={splash2} alt="물방울2" />
      <img src="../../public/image/river.png" alt="강" ref={river} />
      <img src="../../public/image/mountain3.png" alt="산3" />
      <img src="../../public/image/mountain4.png" alt="산4" />
      <img src="../../public/image/forest.png" className="forest" alt="숲" ref={forest}  />
      <div className="forestBg" ref={forestBg}></div>
      <img src="../../public/image/bird1.png" className="bird" alt="새" ref={bird1} />
      <img src="../../public/image/bird2.png" className="bird" alt="새" ref={bird2} />
    </section>
    </>
  );
}
export default Visual;
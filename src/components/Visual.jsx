const Visual = () => {

  window.addEventListener('scroll', function(){
    let value = window.scrollY;
    //console.log(value);

    document.getElementById("forest").style.top = value * - 0.15 + "px";
    document.getElementById("forestBg").style.height = value * 0.2 + 'px';

    document.getElementById("sun").style.top = value * 0.8 + 'px';
    document.getElementById("bird").style.top = value * 0.5 + 'px';

    document.getElementById("river").style.top = value * 0.1 + 'px';
    document.getElementById("text").style.marginTop = value * -1.2 + 'px';

    // cloud1.style.top = value * 0.3 + 'px';
    // cloud2.style.top = value * 0.2 + 'px';
    // cloud3.style.top = value * 0.7 + 'px';

  });

  return(
    <>
    <section className="part visual">
      <img src="../../public/image/cloud1.png" id="cloud1" alt="구름1" />
      <img src="../../public/image/cloud2.png" id="cloud2" alt="구름2" />
      <img src="../../public/image/cloud3.png" id="cloud3" alt="구름3" />
      <img src="../../public/image/sun.png" id="sun"alt="해" />
      <img src="../../public/image/mountain1.png" id="mountain1" alt="산1" />
      <p className="visual-text" id="text">Weclome to the world</p>
      <img src="../../public/image/mountain2.png" id="mountain2" alt="산2" />
      <img src="../../public/image/river.png" id="river" alt="강" />
      <img src="../../public/image/mountain3.png" id="mountain3" alt="산3" />
      <img src="../../public/image/mountain4.png" id="mountain4" alt="산4" />
      <img src="../../public/image/forest.png" id="forest" alt="숲"  />
      <div id="forestBg"></div>
      <img src="../../public/image/bird.png" id="bird" alt="새" />
    </section>
    </>
  );
}
export default Visual;
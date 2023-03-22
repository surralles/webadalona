import React from "react";

import * as styles from "./styles.module.css";
import gsap from "gsap";
import { useRef, useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { StaticImage } from "gatsby-plugin-image"
gsap.registerPlugin(ScrollTrigger);

function App() {
  const imgRef = useRef(null);
  useEffect(() => {
    const el = imgRef.current;
    gsap.fromTo(
      el,
      { rotation: 0 },
      {
        rotation: 360,
        duration: 10,
        delay: 2 ,
        scrollTrigger: {
          trigger: el,
        },
      }
    );
  }, []);
  return (
    <div className={styles.App} ref={imgRef}>
     <StaticImage
        src="../../images/logowb.png"
        loading="eager"
        width={110}   
        formats={["auto", "webp", "avif","svg"]}
        
      />
       
    </div>
  );
}

export default App;
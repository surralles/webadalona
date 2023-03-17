import React from "react";
import logo from "../../images/designingecommerce_600.gif";
import * as styles from "./styles.module.css";
import gsap from "gsap";
import { useRef, useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
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
    <div className={styles.App}>
     
      <img src={logo} className={styles.App-logo} alt="logo" ref={imgRef} />
    </div>
  );
}

export default App;
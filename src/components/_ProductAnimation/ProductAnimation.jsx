import * as React from "react"
import { gsap } from "gsap";
import { useEffect, useRef,useLayoutEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import * as styles from "./productanimation.module.css"
import styled from "@emotion/styled"
import { css } from "@emotion/react"
import { StaticImage } from "gatsby-plugin-image"
import productimage from "../../images/producto-sample.png"

gsap.registerPlugin(ScrollTrigger);

const ProductAnimation = () => {

    const introh1 = useRef(null) ;
    const main = useRef();
    const container = useRef(null)
    useEffect(()=>{  

        const ctx = gsap.context(() => {
            const cont = container.current
            const lo = introh1.current

            ScrollTrigger.create({
                trigger: cont,
                pin: true,
              
                start: "200",
                end: "+=5700",
                markers:true,
                ease:"none"
              });
              
            gsap.to(
                lo, 
                {
                    scrollTrigger: {
                        start: "500",
                        end: "700",
                        scrub: 0.5,
                        ease:"none"
                        
          
                    },
                    scale:2,
                    duration: 5,
                    ease:"none"
           
                
                
              }
            )
          
        }, main); // <- Scope!
        return () => ctx.revert();

    },[])
      

 // <

    return(
<>




<div className={styles.maincontainer}>
     
        <div  className={styles.container}
             ref={container}  >
            <div className={styles.wrapper}>
                <div className={styles.panel}>
                 <div className={styles.intro}>
                   
                    <h3  >Capta la atención</h3>
                    <h1 ref={introh1} >Animaciones de producto</h1>
                </div>
              
                <div className={styles.productoimg}
               >
                <StaticImage
                src="../../images/producto-sample.png"
                loading="eager"
                width={1200}
                quality={95}
                formats={["auto", "webp", "avif","svg"]}
                alt=""
                
                 />
               </div>
                <h1  >Tu producto</h1>
                <ul className={styles.models} 
                >
                 <li >Diferentes Modelo</li>
                 <li >Todos los sectores</li>
                 <li >Customizable</li>
                </ul>
                

                <div className={styles.specs}
                
                >
                 <h2 >Engine</h2>
                  
                    <dl >
                     <dt >Bore x Stroke</dt>
                     <dd >58mm x 58.6mm</dd>

                    <dt >Clutch</dt>
                     <dd >Automatic centrifugal dry clutch</dd>

                    <dt>Consumption</dt>
                    <dd >36.8 Km/I (WMTC cycle)</dd>

                     <dt >Cooling</dt>
                    <dd >Air</dd>

                    <dt >CO2 Emissions</dt>
                    <dd >65 g/Km</dd>

                    <dt >Distribution</dt>
                    <dd>Single overhead camshaft, 3 valves (2 input, 1 output)</dd>

                     <dt >Engine</dt>
                    <dd >Single cylinder 4-stroke -i-get</dd>
                 </dl>
                 </div>
                <dl >
                    <dt >Engine Capacity</dt>
                    <dd >155c</dd>

                    <dt >Fuel system</dt>
                    <dd >Electronic injection</dd>

                    <dt>Lubrication</dt>
                    <dd >Oil with wet sump</dd>

                     <dt >Max Power</dt>
                    <dd >12.9hp (9.6kW) @ 7,750 rpm</dd>

                     <dt >Max Torque</dt>
                    <dd >9.58 ft-lbs (13 Nm) @ 5250 rpm</dd>

                     <dt >Transmission</dt>
                     <dd >Automatic CVT</dd>

                     <dt>Starter</dt>
                    <dd >Electric</dd>
                    </dl>
                     </div>
                 <div className={styles.chars}
                 
                 >
                 <h2>Characteristics</h2>
                 <dl >
                  <dt >Frame</dt>
                <dd >High resistance tubular steel</dd>

                 <dt >Front tyre</dt>
                <dd >Tubeless 90/80 - 16", 51J</dd>

                 <dt>Rear brake</dt>
                 <dd>Tamburo 140mm</dd>

                 <dt>Seat height</dt>
                 <dd>31.1" (790mm)</dd>

                 <dt>Front suspension</dt>
                 <dd>Telescopic hydraulic fork, 76mm stroke</dd>

                  <dt >Rear tyre</dt>
                  <dd>Tubeless 100/80 - 14", 54J</dd>

                 <dt >ABS</dt>
                 <dd>Front wheel standard ABS</dd>
                 </dl>
                 <dl >
                 <dt>Fuel Tank Capacity</dt>
                 <dd >1.58 gal (6 liters)</dd>

                <dt >Rear suspension</dt>
                <dd >Single hydraulic shock absorber with 5-position preload adjustment</dd>

                 <dt>Front brake</dt>
                 <dd>Single disk 240mm</dd>

                 <dt>Length/Width/Wheelbase</dt>
                 <dd >76.5" / 27.1" / 52.7"</dd>

                 <dt >Emission compliance</dt>
                 <dd >EPA, CARB, Transport Canada</dd>
                </dl>
                </div>

                <div className={styles.outro}
                
                >
                 <h2>Piaggio Liberty 150</h2>
                 <p>$2999.00</p>
                 <button>Learn More</button>
                </div>

        </div>

       </div>
</div>
       </>
    )

}


export default ProductAnimation;
import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { useAnime } from "../lib/hooks/useAnime";
import accpet_img from "../public/img/accept.svg"
import test from "../public/img/test.png"
import styles from "./universal.module.css"


const Accpet: React.FC = () => {
  const { animateTargetRef, animationRef } = useAnime({
    translateY: '20px',
    duration: 600,
    loop: true,
    direction: 'alternate',
    easing: 'easeInOutSine'
  })

  return (
    <div>
      <div className={styles.StatusIconArea}>
        {/* <Image src="/img/accept.svg" width="300" height="300" layout="contain"/>
         */}
         <img ref={animateTargetRef} src="/img/accept.svg" style={{width:"60vw"}}></img>
        {/* <div ref={animateTargetRef} style={{ borderRadius: "100%", width: "20px", height: "20px", backgroundColor: "green" }} /> */}
      </div>
      <div className={styles.TextArea}>
        <h3 style={{ color: "green" }}>扫码成功，请入场 🎉</h3>
      </div>
    </div>
  )
}

export default Accpet;
import React, { useRef, useEffect } from "react";
import anime from "animejs"
import { useAnime } from "../lib/hooks/useAnime";
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
        <img ref={animateTargetRef} src="/img/accept.svg" style={{ width: "60vw" }}></img>
      </div>
      <div className={styles.TextArea}>
        <h3 style={{ color: "rgb(7,188,12)" }}>扫码成功，请入场 🎉</h3>
      </div>
    </div>
  )
}

export default Accpet;
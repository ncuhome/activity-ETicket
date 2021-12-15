import React from "react";
import { useAnime } from "../lib/hooks/useAnime";
import styles from "./universal.module.css"

const Disable: React.FC = () => {
  const { animateTargetRef, animationRef } = useAnime({
    translateY: '20px',
    duration: 600,
    loop: true,
    direction: 'alternate',
    easing: 'easeInOutSine'
  })

  return (
    <>
      <div className={styles.StatusIconArea}>
        <img ref={animateTargetRef} src="/img/disable.svg" style={{ width: "60vw" }}></img>
      </div>
      <div className={styles.TextArea}>
        <h3 style={{ color: "rgb(231,76,60)" }}>扫码失败，请重新扫码⛔</h3>
      </div>
    </>
  )
}

export default Disable;
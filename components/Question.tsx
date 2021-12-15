import React from "react";
import { useAnime } from "../lib/hooks/useAnime";
import styles from "./universal.module.css"

const Question: React.FC = () => {
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
        <img ref={animateTargetRef} src="/img/question.svg" style={{ width: "60vw" }}></img>
      </div>
      <div className={styles.TextArea}>
        <h3 style={{ color: "rgb(241,196,15)", whiteSpace: "nowrap" }}>❓未查询到电子票信息，请出示纸质票</h3>
      </div>
    </div>
  )
}

export default Question;
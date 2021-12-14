import React from "react";
import styles from "./universal.module.css"

const Question: React.FC = () => {
  return(
    <>
      <div className={styles.StatusIconArea}>
        Question  
      </div>
      <div className={styles.TextArea}>
        Question
      </div>
    </>
  )
}

export default Question;
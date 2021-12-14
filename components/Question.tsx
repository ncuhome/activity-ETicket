import React from "react";
import styles from "./universal.module.css"

const Question: React.FC = () => {
  return (
    <>
      <div className={styles.StatusIconArea}>
        Question
      </div>
      <div className={styles.TextArea}>
        <h3 style={{ color: "rgb(254,215,7)", whiteSpace: "nowrap" }}>未查询到电子票信息，请出示纸质票</h3>
      </div>
    </>
  )
}

export default Question;
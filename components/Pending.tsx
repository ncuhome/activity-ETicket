import React from "react";
// import { useAnime } from "../lib/hooks/useAnime";
import styles from "./universal.module.css"

const Pending: React.FC = () => {
  return (
    <div>
      <div className={styles.StatusIconArea}>
        {/* <img src="/img/question.svg" style={{ width: "60vw" }}></img> */}
        
      </div>
      <div className={styles.TextArea}>
        {/* <h3 style={{ color: "rgb(241,196,15)", whiteSpace: "nowrap" }}>❓未查询到电子票信息，请出示纸质票</h3> */}
      </div>
    </div>
  )
}
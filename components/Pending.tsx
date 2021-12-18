import React from "react";
import { BallScaleRippleMultiple } from 'react-pretty-loading';
// import { useAnime } from "../lib/hooks/useAnime";
import styles from "./universal.module.css"

const Pending: React.FC = () => {
  return (
    <div>
      <div className={styles.StatusIconArea}>
        <BallScaleRippleMultiple loading={true} center={true} color={"rgb(34,183,203)"} width={100} />
      </div>
      <div className={styles.TextArea}>
        <h3 style={{ color: "rgb(34,183,203)", whiteSpace: "nowrap" }}>加载中...</h3>
      </div>
    </div>
  )
}

export default Pending;
import React from "react";
import styles from "./universal.module.css"

const Accpet: React.FC = () => {
  return (
    <>
      <div className={styles.StatusIconArea}>
        Accept
      </div>
      <div className={styles.TextArea}>
        <h3 style={{color:"green"}}>扫码成功，请入场</h3>
      </div>
    </>
  )
}

export default Accpet;
import React from "react";
import styles from "./universal.module.css"

const Disable: React.FC = () => {
  return (
    <>
      <div className={styles.StatusIconArea}>
        Disable
      </div>
      <div className={styles.TextArea}>
        <h3 style={{ color: "red" }}>扫码失败，请重新扫码</h3>
      </div>
    </>
  )
}

export default Disable;
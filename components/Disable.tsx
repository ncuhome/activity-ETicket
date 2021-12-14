import React from "react";
import styles from "./universal.module.css"

const Disable: React.FC = () => {
  return(
    <>
    <div className={styles.StatusIconArea}>
      Disable
    </div>
    <div className={styles.TextArea}>
      Disable text
    </div>
  </>
  )
}

export default Disable;
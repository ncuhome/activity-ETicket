import React from "react";
import styles from "./universal.module.css"

const Accpet: React.FC = () => {
  return (
    <>
      <div className={styles.StatusIconArea}>
        Accept
      </div>
      <div className={styles.TextArea}>
        Accept text
      </div>
    </>
  )
}

export default Accpet;
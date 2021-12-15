import React from "react";
// import { motion, useMotionValue, useTransform } from "framer-motion";
import styles from "./universal.module.css"

const Accpet: React.FC = () => {
  
  return (
    <div>
      <div className={styles.StatusIconArea}>
      </div>
      <div className={styles.TextArea}>
        <h3 style={{ color: "green" }}>扫码成功，请入场 🎉</h3>
      </div>
    </div>
  )
}

export default Accpet;
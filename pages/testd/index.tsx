import React from "react";
import { useSafeArea } from '../../lib/hooks/useSafeArea'
import { useCheckTicket } from "../../lib/hooks/useCheckTicket";
import styles from "./index.module.css"


const testd: React.FC = () => {
  const { top } = useSafeArea()

  const {Component, Text} = useCheckTicket("question");

  return (
    <div className={styles.base_div} style={{ marginTop: top}}>
      <div className={styles.StatusIconArea}>
        {Component}
      </div>
      <div className={styles.TextArea}>
        {Text}
      </div>
    </div>

  )
}

export default testd;
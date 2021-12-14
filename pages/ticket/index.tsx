import React from "react";
import Head from 'next/head'
import { useLogin } from '../../lib/hooks/useLogin'
import { useSafeArea } from '../../lib/hooks/useSafeArea'
import { useCheckTicket } from "../../lib/hooks/useCheckTicket";
import Loading from '../../components/loading'
import styles from "./index.module.css"


const TicketPage: React.FC = () => {
  const { top } = useSafeArea()

  const { isReady } = useLogin()

  const { Component, Text } = useCheckTicket("question");

  if (!isReady) {
    return <Loading/>
  }

  return (
    <>
      <Head>
        <title>电子票验证</title>
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1.0,maximum-scale=1.0, user-scalable=0"
        />
      </Head>
      <div className={styles.base_div} style={{ marginTop: top }}>
        <div className={styles.StatusIconArea}>
          {Component}
        </div>
        <div className={styles.TextArea}>
          {Text}
        </div>
      </div>
    </>
  )
}

export default TicketPage;
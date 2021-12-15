import React, { useEffect, useState } from "react";
import Head from 'next/head'
import { useLogin } from '../lib/hooks/useLogin'
import { useSafeArea } from '../lib/hooks/useSafeArea'
import { useCheckTicket } from "../lib/hooks/useCheckTicket";
import Loading from '../components/loading'
import styles from "./index.module.css"

if (process.env.NODE_ENV === 'development') {
  import('mincu-debug').then(({ default: debugModule }) => {
    debugModule.applyConsole()
  })
}

const TicketPage: React.FC = () => {
  const { top } = useSafeArea()
  const { isReady } = useLogin()
  const StatusComponent = useCheckTicket("accept");

  if (!isReady) {
    return <Loading />
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
        <div>
          {StatusComponent}
        </div>
      </div>
    </>
  )
}

export default TicketPage;
import React, { useEffect, useState } from "react";
import Head from 'next/head'
import axios from "axios";
import { useSafeArea } from '../lib/hooks/useSafeArea'
import { useCheckTicket } from "../lib/hooks/useCheckTicket";
import styles from "./index.module.css"
import Pending from "../components/Pending";
import { API } from '../utils'
import { dataModule } from 'mincu-react'
import { useAppReady } from '../lib/hooks/useAppReady'


const getParam = (key: string) => {
  const url = new URL(location.href)
  return url.searchParams.get(key)
}

const TicketPage: React.FC = () => {
  const [statusCode, setStatusCode] = useState(999)
  const { top } = useSafeArea()
  const isReady = useAppReady()

  const checkin = () => {
    const token = getParam('token')
    if (token) {
      setTimeout(() => {
        const id = dataModule.appData.user.profile.entireProfile.base_info.xh
        const ticketURL = `${API}/checkin?token=${token}&id=${id}`;
        axios.get(ticketURL)
          .then((res) => {
            setStatusCode(res.data.code)
          })
          .catch((err) => {
            setStatusCode(200)
          })
      }, 3000)
    } else {
      setStatusCode(200)
    }
  }

  useEffect(() => {
    if (isReady) {
      checkin()
    }
  }, [isReady])

  if (!isReady) {
    return <Pending />
  }

  const StatusComponent = useCheckTicket(statusCode);

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
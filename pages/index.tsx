import React, { useEffect, useState } from "react";
import Head from 'next/head'
import axios from "axios";
import { useLogin } from '../lib/hooks/useLogin'
import { useSafeArea } from '../lib/hooks/useSafeArea'
import { useCheckTicket } from "../lib/hooks/useCheckTicket";
import styles from "./index.module.css"
import Pending from "../components/Pending";
import { dataModule } from "mincu-react";
import { API } from '../utils'

const getParam = (key: string) => {
  const url = new URL(location.href)
  return url.searchParams.get(key)
}

const TicketPage: React.FC = () => {
  const [statusCode, setStatusCode] = useState(999)
  const { top } = useSafeArea()
  const { isReady, id } = useLogin()

  useEffect(() => {
    const token = getParam('token')
    if (token && id) {
      const ticketURL = `${API}/checkin?token=${token}&id=${id}`;

      axios.get(ticketURL)
        .then((res) => {
          setStatusCode(res.data.code)
        })
    } else {
      setStatusCode(403)
    }
  }, [id])

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
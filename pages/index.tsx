import React, { useEffect, useState } from "react";
import Head from 'next/head'
import axios from "axios";
import { useLogin } from '../lib/hooks/useLogin'
import { useSafeArea } from '../lib/hooks/useSafeArea'
import { useCheckTicket } from "../lib/hooks/useCheckTicket";
import styles from "./index.module.css"
import Pending from "../components/Pending";
import { dataModule } from "mincu-react";

if (process.env.NODE_ENV === 'development') {
  import('mincu-debug').then(({ default: debugModule }) => {
    debugModule.applyConsole()
  })
} //mincud引入代码

const getParam = (key: string) => {
  const url = new URL(location.href)
  return url.searchParams.get(key)
}

const TicketPage: React.FC = () => {
  const [statusCode, setStatusCode] = useState(999)
  const { top } = useSafeArea()
  const { isReady } = useLogin()

  useEffect(() => {
    if (isReady) {
      const token = getParam('token')
      const id = dataModule.userInfo.profile.entireProfile.base_info.xh
      const ticketURL = "https://qrcode-eticket.vercel.app/api/checkin?token=" + token + "&id=" + id;
      axios.get(ticketURL)
        .then((res) => {
          setStatusCode(res.data.code)
        })
        .catch((err) => {
          setStatusCode(err.response.data.code)
        })
    }

  }, [isReady])

  const StatusComponent = useCheckTicket(statusCode);

  if (!isReady) {
    return <Pending />
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
import React, { useEffect, useState } from "react";
import Head from 'next/head'
import useSWR from 'swr';
import { useLogin } from '../lib/hooks/useLogin'
import { useSafeArea } from '../lib/hooks/useSafeArea'
import { useCheckTicket } from "../lib/hooks/useCheckTicket";
import { useInfoState } from '../store/index'
import Loading from '../components/loading'
import styles from "./index.module.css"
import axios from "axios";

if (process.env.NODE_ENV === 'development') {
  import('mincu-debug').then(({ default: debugModule }) => {
    debugModule.applyConsole()
  })
}

const fetcher = url => axios.get(url).then(res => res.data)

const TicketPage: React.FC = () => {
  const { top } = useSafeArea()
  // const { isReady } = useLogin()
  const studentID = useInfoState((state) => state.studentID) //获取学号
  const [token, setToken] = useState("666666")
  //获取url的token
  const getToken = useEffect(() => {
    const url = location.href
    const urlArray = url.split("?");
    // setToken(urlArray[1]);
    console.log(token)
    console.log(studentID)
  }, [token])

  //发送请求验证

  // const ticketURL = "https://qrcode-eticket.vercel.app/api/checkin"
  const ticketURL = "/api/checkin?token=" + token + "&id=" + studentID;
  // const ticketURL = 'https://qrcode-eticket.vercel.app/api/checkin?token=666666&id=6109120073'
  // const ticketURL = "https://v1.hitokoto.cn"
  const { data, error } = useSWR(ticketURL, fetcher);
  // const message = data;
  // console.log(data)
  // console.log("error" + error)

  const StatusComponent = useCheckTicket("disable");

  // if (!isReady) {
  //   return <Loading />
  // }

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
        <div>

        </div>
      </div>
    </>
  )
}

// TicketPage.getInitialProps = async ({ req }) => {
//   const userAgent = req ? req.headers['user-agent'] : navigator.userAgent
//   return { userAgent }
// }

export default TicketPage;
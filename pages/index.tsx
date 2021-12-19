import React, { useEffect, useState } from "react";
import Head from 'next/head'
import axios from "axios";
import { useLogin } from '../lib/hooks/useLogin'
import { useSafeArea } from '../lib/hooks/useSafeArea'
import { useCheckTicket } from "../lib/hooks/useCheckTicket";
import { useInfoState } from '../store/index'
import styles from "./index.module.css"
import Pending from "../components/Pending";

if (process.env.NODE_ENV === 'development') {
  import('mincu-debug').then(({ default: debugModule }) => {
    debugModule.applyConsole()
  })
} //mincud引入代码

const TicketPage: React.FC = () => {
  const [statusCode, setStatusCode] = useState(999)
  const [token, setToken] = useState("")
  const { top } = useSafeArea()
  const { isReady } = useLogin()
  const studentID = useInfoState((state) => state.studentID) //获取学号

  //获取url的token
  const getToken = useEffect(() => {
    const url = location.href
    // const url = "https://activity-et-icket.vercel.app/?token=979007"
    const param = getURLParam(url);
    console.log(param)
    setToken(param.token);
  }, [token])

  //解析urlParam
  const getURLParam = (url) => {
    const _url = url || window.location.href;
    const _urlParams = _url.match(/([?&])(.+?=[^&]+)/igm);
    return _urlParams ? _urlParams.reduce((a, b) => {
      const value = b.slice(1).split('=');
      a[value[0]] = value[1]
      return a;
    }, {}) : {};
  }

  //发送请求验证
  const sendTicket = useEffect(() => {
    const ticketURL = "https://qrcode-eticket.vercel.app/api/checkin?token=" + token + "&id=" + studentID;
    axios.get(ticketURL)
      .then((res) => {
        setStatusCode(res.data.code)
      })
      .catch((err) => {
        setStatusCode(err.response.data.code)
      })
    return
  }, [token])

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
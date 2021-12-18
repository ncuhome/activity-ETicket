import React, { useEffect, useState } from "react";
import Head from 'next/head'
import { useLogin } from '../lib/hooks/useLogin'
import { useSafeArea } from '../lib/hooks/useSafeArea'
import { useCheckTicket } from "../lib/hooks/useCheckTicket";
import { useInfoState } from '../store/index'
// import Loading from '../components/loading'
import styles from "./index.module.css"
import axios, { AxiosResponse } from "axios";
import Pending from "../components/Pending";

// if (process.env.NODE_ENV === 'development') {
//   import('mincu-debug').then(({ default: debugModule }) => {
//     debugModule.applyConsole()
//   })
// }

const TicketPage: React.FC = () => {
  const [statusCode, setStatusCode] = useState(999)
  const [token, setToken] = useState("666666")
  const { top } = useSafeArea()
  const { isReady } = useLogin()
  const studentID = useInfoState((state) => state.studentID) //获取学号

  //获取url的token
  const getToken = useEffect(() => {
    const url = location.href
    const urlArray = url.split("?");
    setToken(urlArray[1]);
    console.log(token)
    console.log(studentID)
  }, [token])

  //发送请求验证
  const ticketURL = "/api/checkin?token=" + token + "&id=" + studentID;
  // const { data, error } = useSWR(ticketURL, fetcher);
  const sendTicket = useEffect(() => {
    axios.get(ticketURL)
      .then((res) => {
        console.log(res) //还不知道res的结构，暂时不在此情况下修改code
      })
      .catch((err) => {
        setStatusCode(err.response.data.code)
      })
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
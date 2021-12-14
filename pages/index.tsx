import React, { useEffect, useState } from "react";
import Head from 'next/head'
import { useLogin } from '../lib/hooks/useLogin'
import { useSafeArea } from '../lib/hooks/useSafeArea'
import { useCheckTicket } from "../lib/hooks/useCheckTicket"; //使用hooks进行组件的控制会出现无法更新页面的情况 暂时通过手动切换
import Accpet from "../components/Accept";
import Disable from "../components/Disable";
import Question from "../components/Question";
import Loading from '../components/loading'
import styles from "./index.module.css"

const TicketPage: React.FC = () => {
  const { top } = useSafeArea()
  const { isReady } = useLogin()

  // const [StatusComponent,setStatusComponent] = useState<React.FC>()

  const component = useCheckTicket("question");
  // useEffect(() => {
  //   setStatusComponent(component);
  // }, [component])

  

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
          {/* <Accpet/> */}
          {/* <Disable/> */}
          {/* <Question/> */}
          {component}
        </div>
      </div>
    </>
  )
}

export default TicketPage;
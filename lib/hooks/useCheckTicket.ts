import React, { useState, useEffect } from "react";
import Accpet from "../../components/accept";
import Disable from "../../components/disable";
import Question from "../../components/question";

interface ReturnValue {
  Component: React.FC;
  Text: string;
}

export const useCheckTicket = (something: string): ReturnValue => {
  const [StatusComponent, setStatusComponent] = useState<React.FC>(Disable);
  const [DescribeText, setDescribeText] = useState<string>("扫码失败，请重新扫码");

  useEffect(() => {
    switch (something) {
      case "disable":
        setStatusComponent(Disable);
        setDescribeText("扫码失败，请重新扫码");
        break;
      case "accept":
        setStatusComponent(Accpet);
        setDescribeText("扫码成功，请入场");
        break;
      case "question":
        setStatusComponent(Question);
        setDescribeText("未查询到电子票信息，请出示纸质票");
        break;
      default:
        break;
    }
    return
  }, [something])
 
  return {
    Component: StatusComponent,
    Text: DescribeText,
  };
};

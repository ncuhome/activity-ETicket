import React from "react";
import Accpet from "../../components/Accept";
import Disable from "../../components/Disable";
import Question from "../../components/Question";
import Pending from "../../components/Pending";

interface ob {
  msg: string,
  code: number
}

export const useCheckTicket = (something): React.ReactNode => {
  const code = something;
  switch (code) {
    case 999:
      return <Pending />;
    case 403:
      return <Disable />;
    case 200:
      return <Accpet />
    case 401:
      return <Question />;
    default:
      return <Disable />
  }
};

import React from "react";
import Accpet from "../../components/Accept";
import Disable from "../../components/Disable";
import Question from "../../components/Question";

export const useCheckTicket = (something: string): React.ReactNode => {
  switch (something) {
    case "disable":
      return <Accpet />;
    case "accept":
      return <Accpet />
    case "question":
      return <Question />;
  }
};

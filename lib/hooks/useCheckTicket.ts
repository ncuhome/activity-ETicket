import React, { useState, useEffect } from "react";
import Accpet from "../../components/Accept";
import Disable from "../../components/Disable";
import Question from "../../components/Question";


export const useCheckTicket = (something: string): React.FC => {
  const [StatusComponent, setStatusComponent] = useState<React.FC>(Disable);

  useEffect(() => {
    switch (something) {
      case "disable":
        setStatusComponent(Disable);
        break;
      case "accept":
        setStatusComponent(Accpet);
        break;
      case "question":
        setStatusComponent(Question);
        break;
      default:
        break;
    }
    return
  }, [something])
 
  return StatusComponent
};

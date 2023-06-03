import { InterswitchPay } from "react-interswitch";
import gatwayStyle from "./gatway.module.css"

export default function Interswitch() {
  const props = {
    merchantCode: "MX26070",
    payItemID: "Default_Payable_MX26070",
    customerEmail: "synergyaffirm@gmail.com",
    redirectURL: "https://quickteller.com/dashboard",
    text: "Pay Now",
    mode: "TEST",
    transactionReference: Date.now().toString(),
    amount: "10000",
    style: {
      width: "200px",
      height: "40px",
      border: "none",
      color: "#fff",
      backgroundColor: "#ff0000"
    },
    callback: (response) => {
      console.log("response: ", response);
    }
  };

  return (
    <div className={gatwayStyle.wrapper}>
      <InterswitchPay {...props} />
    </div>
  );
}
import React, { useEffect, useState } from "react";
import "./PaymentAndDeliveryMethods.css";
import useMethods from "../../hooks/useMethods";
const PaymentAndDeliveryMethods = () => {
  // const [methods, setMethods] = useState([]);
  // useEffect(() => {
  //   fetch("./paymentAndDeliveryMethods.json")
  //     .then((res) => res.json())
  //     .then((data) => setMethods(data));
  // }, []);
  // // return { methods };
  const { methods } = useMethods();
  console.log(methods);
  return (
    <div>
      <h6>Payment Methods</h6>
      <div className="payment-methods d-flex flex-wrap">
        {methods.map((method) => (
          <img src={method.image} alt="" />
        ))}
      </div>
    </div>
  );
};

export default PaymentAndDeliveryMethods;

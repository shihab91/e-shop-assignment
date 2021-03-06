import React from "react";
import "./PaymentAndDeliveryMethods.css";
import useMethods from "../../hooks/useMethods";
const PaymentAndDeliveryMethods = () => {
  const { methods } = useMethods();
  return (
    <div className="payment-shipping-method-container">
      <div>
        <h6>Payment Methods</h6>
        <div className="payment-methods d-flex flex-wrap">
          {methods.slice(0, 6).map((method, index) => (
            <img key={index} src={method.image} alt="" />
          ))}
        </div>
      </div>
      <div className="mt-5">
        <h6>Delivery Methods</h6>
        <div className="delivery-methods mt-3 d-flex flex-wrap">
          {methods.slice(6, 10).map((method, index) => (
            <div
              key={index}
              className="single-delivery-method d-flex flex-row justify-content-center align-items-center"
            >
              <img src={method.image} alt="" />
              <p className="m-0">${method.cost}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PaymentAndDeliveryMethods;

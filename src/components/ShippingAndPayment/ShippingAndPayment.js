import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import MyCart from "../MyCart/MyCart";
import PaymentAndDeliveryMethods from "../PaymentAndDeliveryMethods/PaymentAndDeliveryMethods";
import ShippingInfo from "../ShippingInfo/ShippingInfo";
import "./ShippingAndPayment.css";
const ShippingAndPayment = () => {
  return (
    <Container className="payment-shipping-container">
      <Row>
        <Col md={5}>
          <h6>Shipping and Payment</h6>
          <div className="mt-5 mb-4">
            <button className="button log-in-button">LOGIN</button>
            <button className="button sign-up-button">SIGN UP</button>
          </div>
          {/* shopping information. the input fields */}
          <ShippingInfo />
        </Col>
        {/* payment and delivery methods component */}
        <Col>
          <PaymentAndDeliveryMethods />
        </Col>
        {/* the cart component */}
        <Col>
          <MyCart />
        </Col>
      </Row>
    </Container>
  );
};

export default ShippingAndPayment;

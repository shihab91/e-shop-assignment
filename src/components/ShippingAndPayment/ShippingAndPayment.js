import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import MyCart from "../MyCart/MyCart";
import PaymentMethods from "../PaymentMethods/PaymentMethods";
import ShippingInfo from "../ShippingInfo/ShippingInfo";
import "./ShippingAndPayment.css";
const ShippingAndPayment = () => {
  return (
    <Container className="my-5">
      <Row>
        <Col md={6}>
          <h6>Shipping and Payment</h6>
          <div className="mt-5 mb-4">
            <button className="button log-in-button">LOGIN</button>
            <button className="button sign-up-button">SIGN UP</button>
          </div>
          <ShippingInfo />
        </Col>
        <Col>
          <MyCart />
        </Col>
        <Col>
          <PaymentMethods />
        </Col>
      </Row>
    </Container>
  );
};

export default ShippingAndPayment;

import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import MyCart from "../MyCart/MyCart";
import PaymentAndDeliveryMethods from "../PaymentAndDeliveryMethods/PaymentAndDeliveryMethods";
import ShippingInfo from "../ShippingInfo/ShippingInfo";
import { Link } from "react-router-dom";
import "./ShippingAndPayment.css";
import Footer from "../Footer/Footer";

const ShippingAndPayment = () => {
  return (
    <Container className="payment-shipping-container">
      <Row>
        <Col md={5}>
          <h6>Shipping and Payment</h6>
          <div className="mt-5 mb-4">
            <Link to="/login">
              <button className="button log-in-button">LOGIN</button>
            </Link>
            <Link to="/signup">
              <button className="button sign-up-button">SIGN UP</button>
            </Link>
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
      {/* the footer */}
      <Footer />
    </Container>
  );
};

export default ShippingAndPayment;

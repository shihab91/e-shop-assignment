import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import MyCart from "../MyCart/MyCart";
import PaymentAndDeliveryMethods from "../PaymentAndDeliveryMethods/PaymentAndDeliveryMethods";
import ShippingInfo from "../ShippingInfo/ShippingInfo";
import { Link } from "react-router-dom";
import "./ShippingAndPayment.css";
import PaymentFooter from "../PaymentFooter/PaymentFooter";
import useAuth from "../../hooks/useAuth";
const ShippingAndPayment = () => {
  const { user, signOutUser } = useAuth();
  const handleSignOut = () => {
    signOutUser();
  };
  return (
    <Container className="payment-shipping-container">
      <Row>
        <Col md={5}>
          <h5 className="fw-bold" style={{ color: "var(--green-color)" }}>
            Shipping and Payment
          </h5>
          <div className="mt-5 mb-4">
            {user.email ? (
              <button
                className="button sign-up-and-out-button"
                onClick={handleSignOut}
              >
                Sign Out
              </button>
            ) : (
              <div>
                <Link to="/login">
                  <button className="button log-in-button">LOGIN</button>
                </Link>
                <Link to="/signup">
                  <button className="button sign-up-and-out-button">
                    SIGN UP
                  </button>
                </Link>
              </div>
            )}
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
      <PaymentFooter />
    </Container>
  );
};

export default ShippingAndPayment;

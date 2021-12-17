import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FaLinkedinIn, FaGithub, FaFacebookF } from "react-icons/fa";
import "./Footer.css";
const Footer = () => {
  return (
    <>
      <hr />
      <Container className="my-5">
        <Row>
          <Col>
            <h4 className="ms-4 fw-bold">Explore</h4>
            <hr />
            <ul className="footer-links">
              <li>Men's T-Shirt</li>
              <li>Men's Shirt</li>
              <li>Cart</li>
              <li>Cart</li>
            </ul>
          </Col>
          <Col>
            <h4 className="ms-4 fw-bold">Connect</h4>
            <hr />
            <h5 style={{ color: "var(--green-color)" }}>
              Join our mailing list for news and offers!
            </h5>
            <input type="text" placeholder="Join our mailing list " />
            <button className="button">Subscribe</button>
          </Col>
        </Row>
        <hr className="mt-5" />
        <div className="d-flex flex-row justify-content-center align-items-center mt-5 footer-icons">
          <FaLinkedinIn />
          <FaGithub />
          <FaFacebookF />
        </div>
      </Container>
    </>
  );
};

export default Footer;

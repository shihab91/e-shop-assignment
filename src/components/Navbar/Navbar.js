import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import logo from "../../assets/images/eshop2.png";
import { BsCart2, BsPerson, BsSearch } from "react-icons/bs";
import "./Navbar.css";
const Navbar = () => {
  return (
    <Container>
      <Row xs={1} md={3} className="navigation-bar">
        <Col>
          <img src={logo} alt="the logo" width="80px" />
        </Col>
        <Col className="header-links">
          <ul>
            <li>Men</li>
            <li>Women</li>
            <li>Kids</li>
          </ul>
        </Col>
        <Col className="header-icons">
          <ul>
            <li>
              <BsCart2 />
            </li>
            <li>
              <BsPerson />
            </li>
            <li>
              <BsSearch />
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default Navbar;

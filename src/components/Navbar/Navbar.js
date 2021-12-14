import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import logo from "../../assets/images/eshop2.png";
import { BsCart2, BsPerson, BsSearch } from "react-icons/bs";
import "./Navbar.css";
const Navbar = () => {
  return (
    <>
      <Container>
        <Row xs={1} md={3} className="navigation-bar">
          <Col className="w-fit-content ">
            <img src={logo} alt="the logo" width="80px" className="logo" />
          </Col>
          <Col className="my-auto p-0">
            <ul className="header-links">
              <li>Men</li>
              <li>Women</li>
              <li>Kids</li>
            </ul>
          </Col>
          <Col className=" my-auto ">
            <ul className="header-icons float-md-end">
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
      <hr className="horizontal-line" />
    </>
  );
};

export default Navbar;

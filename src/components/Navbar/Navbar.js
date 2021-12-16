import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import logo from "../../assets/images/eshop2.png";
import { BsCart2, BsPerson, BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";
import "./Navbar.css";
import useAuth from "../../hooks/useAuth";
const Navbar = () => {
  const { user } = useAuth();
  console.log(user);
  return (
    <>
      <Container>
        <Row className="navigation-bar">
          <Col>
            <Link to="/">
              <img src={logo} alt="the logo" width="180px" className="logo" />
            </Link>
          </Col>
          <Col className="my-auto p-0">
            <ul className="header-links">
              <li>Men</li>
              <li>Women</li>
              <li>Kids</li>
            </ul>
          </Col>
          <Col className="my-auto" xs={4}>
            <ul className="header-icons float-md-end">
              <li>
                <BsCart2 />
              </li>
              <li>
                {user?.email && user.displayName}
                <BsPerson className="ms-3" />
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

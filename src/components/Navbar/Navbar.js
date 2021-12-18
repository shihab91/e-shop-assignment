import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import logo from "../../assets/images/eshop2.png";
import { BsCart2, BsPerson } from "react-icons/bs";
import { Link } from "react-router-dom";
import { BadgeOverlay } from "react-rainbow-components";
import { useNavigate } from "react-router";
import "./Navbar.css";
import useAuth from "../../hooks/useAuth";
import useCart from "../../hooks/useCart";
const Navbar = () => {
  const navigate = useNavigate();
  const { user, signOutUser, admin } = useAuth();
  const [cartProducts] = useCart();
  return (
    <>
      <Container>
        <Row className="navigation-bar">
          <Col xs={2}>
            <Link to="/">
              <img src={logo} alt="the logo" width="180px" className="logo" />
            </Link>
          </Col>
          <Col className="my-auto p-0">
            <ul className="header-links">
              {!admin ? (
                <>
                  <a href="#menTShirts">
                    <li>T-Shirts</li>
                  </a>
                  <a href="#shirts">
                    <li>Shirts</li>
                  </a>
                </>
              ) : (
                <Link to="/makeadmin">
                  <li>Make Admin</li>
                </Link>
              )}
              {user?.email ? (
                <button
                  className="button sign-up-and-out-button"
                  onClick={() => {
                    signOutUser();
                  }}
                >
                  Sign Out
                </button>
              ) : (
                <Link to="/login">
                  <button className="button log-in-button">LOGIN</button>
                </Link>
              )}
            </ul>
          </Col>
          <Col className="my-auto" xs={4}>
            <ul className="header-icons float-md-end">
              <li
                onClick={() => {
                  navigate("/myorders");
                }}
              >
                <BadgeOverlay
                  className="rainbow-m-around_medium"
                  value={cartProducts.length}
                >
                  <BsCart2 />
                </BadgeOverlay>
              </li>
              <li>
                {user?.email && user.displayName}
                <BsPerson className="ms-3" />
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

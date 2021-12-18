import React from "react";
import { Container } from "react-bootstrap";
import "./MakeAdmin.css";
const MakeAdmin = () => {
  return (
    <Container className="mt-5 d-flex gap-4 flex-column justify-content-center align-items-center">
      <input type="email" className="mt-5" placeholder="enter email" />
      <button className="button">Make Admin</button>
    </Container>
  );
};

export default MakeAdmin;

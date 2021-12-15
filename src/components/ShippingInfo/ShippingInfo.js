import React from "react";
import { Container } from "react-bootstrap";
import "./ShippingInfo.css";
const ShippingInfo = () => {
  return (
    <Container className="p-0 mt-5">
      <h6>Shipping Information</h6>
      <form action="" className="my-4 shipping-form">
        <input type="email" placeholder="Email" />
        <input type="text" placeholder="Address" />
        <input type="text" placeholder="First name" />
        <input type="text" placeholder="City" />
        <input type="text" placeholder="last name" />
        <input type="number" placeholder="Postal Code/ZIP" />
        <input type="number" placeholder="Phone Number" />
        <select name="country" id="" placeholder="Country">
          <option disabled selected>
            Country
          </option>
          <option value="">India</option>
          <option value="">Bangladesh</option>
          <option value="">America</option>
          <option value="">Pakistan</option>
        </select>
      </form>
    </Container>
  );
};

export default ShippingInfo;

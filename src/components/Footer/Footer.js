import React from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer d-flex flex-row justify-content-between align-items-center">
      <div className="back-icon">
        <AiOutlineArrowLeft size={20} />
        <span className="ms-3 fs-5">Back</span>
      </div>
      <div className="footer-buttons">
        <button className="button">CONTINUE SHOPPING</button>
        <button className="button">PROCEED TO PAYMENT</button>
      </div>
    </div>
  );
};

export default Footer;

import React from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";
import useAuth from "../../hooks/useAuth";
import "./Footer.css";
const Footer = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const handleProceedToCheckout = () => {
    if (!user.email) {
      navigate("/login");
    } else {
      Swal.fire({
        icon: "success",
        title: "Checkout Successful",
      });
    }
  };
  return (
    <div className="footer d-flex flex-row justify-content-between align-items-center">
      <div className="back-icon" onClick={() => window.history.back()}>
        <AiOutlineArrowLeft size={20} />
        <span className="ms-2 fs-5">Back</span>
      </div>
      <div className="footer-buttons">
        <button className="button">CONTINUE SHOPPING</button>
        <button className="button" onClick={handleProceedToCheckout}>
          PROCEED TO PAYMENT
        </button>
      </div>
    </div>
  );
};

export default Footer;

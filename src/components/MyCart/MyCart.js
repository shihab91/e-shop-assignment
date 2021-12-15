import React from "react";
// import { Container } from "react-bootstrap";
import "./MyCart.css";
import { MdOutlineDeliveryDining } from "react-icons/md";
import { BsCart2 } from "react-icons/bs";
import { FiTruck } from "react-icons/fi";

import useCart from "../../hooks/useCart";
const MyCart = () => {
  const { cartProducts } = useCart();
  return (
    <div className="cart">
      <div className="cart-and-delivery-icons d-flex flex-row justify-content-center align-items-center ">
        {/* cart and delivery icon */}
        <BsCart2 className="cart-icon" />
        <div className="straight-line"></div>
        <MdOutlineDeliveryDining className="delivery-icon" />
      </div>
      <h6>Your Cart</h6>
      {/* cart products */}
      {cartProducts.map((product, index) => (
        <div className="cart-item d-flex flex-row" key={index}>
          <div className="d-flex flex-row">
            <img src={product.imageUrl} width="60px" alt="" />
            <div className="product-name-and-id">
              <p>{product.productName}</p>
              <p id="product-id"> #{product.id}</p>
            </div>
          </div>
          <p className="product-price">${product.price}</p>
        </div>
      ))}
      {/* total cost button */}
      <div>
        <button className="total-cost-button">
          Total Cost &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; $159.98{" "}
        </button>
      </div>
      <div className="d-flex flex-row justify-content-center align-items-center mt-5 gap-3">
        {/* truck icon */}
        <FiTruck className="truck-icon" />
        <p className="m-0">
          You are $30.02 away <br /> from free shipping!
        </p>
      </div>
    </div>
  );
};

export default MyCart;

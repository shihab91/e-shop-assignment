import React from "react";
// import { Container } from "react-bootstrap";
import "./MyCart.css";
import { MdOutlineDeliveryDining } from "react-icons/md";
import { BsCart2 } from "react-icons/bs";
import { FiTruck } from "react-icons/fi";
import { AiOutlineCloseCircle } from "react-icons/ai";
import useCart from "../../hooks/useCart";
const MyCart = () => {
  const [cartProducts] = useCart();
  let totalConst = 0;
  for (const product of cartProducts) {
    totalConst += product.productPrice;
  }
  const handleDeleteProductFromCart = (id) => {
    fetch(`http://localhost:5000/orders?id=${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          window.location.reload();
        }
      });
  };
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
      {cartProducts.slice(0, 2).map((product, index) => (
        <div className="cart-item d-flex flex-row" key={index}>
          <div className="d-flex flex-row">
            <img src={product.productImage} width="60px" height="60px" alt="" />
            <div className="product-name-and-id">
              <p>{product.productName}</p>
              <p id="product-id"> #{product._id.slice(0, 6)}...</p>
            </div>
          </div>
          <AiOutlineCloseCircle
            onClick={() => {
              handleDeleteProductFromCart(product._id);
            }}
            className="fs-2 mb-3"
            style={{ color: "red", cursor: "pointer" }}
          />
          <p className="product-price">${product.productPrice}</p>
        </div>
      ))}
      {/* total cost button */}
      <div>
        {cartProducts.length > 2 && (
          <p style={{ color: "var(--green-color)", marginLeft: "150px" }}>
            {cartProducts.length - 2} more....
          </p>
        )}
        <button className="total-cost-button">
          Total Cost &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ${totalConst}
        </button>
      </div>
      <div className="d-flex flex-row justify-content-center align-items-center mt-5 gap-3">
        {/* truck icon */}
        <FiTruck className="truck-icon" />
        <p className="m-0">
          You are ${200 - totalConst} away <br /> from free shipping!
        </p>
      </div>
    </div>
  );
};

export default MyCart;

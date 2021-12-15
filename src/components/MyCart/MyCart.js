import React from "react";
// import { Container } from "react-bootstrap";
import "./MyCart.css";
import { MdOutlineDeliveryDining } from "react-icons/md";
import useCart from "../../hooks/useCart";
const MyCart = () => {
  const { cartProducts } = useCart();
  console.log(cartProducts);
  return (
    <div className="cart">
      <h6>Your Cart</h6>
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
      <div>
        <button className="mx-atuo total-cost-button">
          Total Cost &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; $159.98{" "}
        </button>
      </div>
    </div>
  );
};

export default MyCart;

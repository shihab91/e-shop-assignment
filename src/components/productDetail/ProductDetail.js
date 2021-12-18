import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router";
import { ZoomableImage } from "react-rainbow-components";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
const ProductDetail = () => {
  const { id } = useParams();
  const [singleProduct, setSingleProduct] = useState({});
  const { user } = useAuth();
  const { displayName, email } = user;
  console.log(displayName, email);
  useEffect(() => {
    fetch(`http://localhost:5000/products/${id}`)
      .then((res) => res.json())
      .then((data) => setSingleProduct(data));
  }, [id]);
  const handleAddToCartButton = (id) => {
    const data = { useName: displayName, useEmail: email, ...singleProduct };
    fetch("http://localhost:5000/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.acknowledged) {
          Swal.fire({
            icon: "success",
            title: "product added to the cart successfully",
          });
        }
      });
  };
  return (
    <Container className="mt-5">
      <Row>
        <Col>
          <ZoomableImage
            src={singleProduct.productImage}
            alt=""
            width="60%"
            className="float-end border-0 rounded-3"
          />
        </Col>
        <Col className="mt-5">
          <h2 style={{ color: "var(--green-color)" }}>
            {singleProduct.productName}
          </h2>
          <h5 className="my-4">
            Price:{" "}
            <span style={{ color: "var(--green-color)" }}>
              ${singleProduct.productPrice}{" "}
            </span>
          </h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui,
            voluptate adipisci. Quibusdam, aliquid, minima blanditiis porro
            necessitatibus ducimus rerum repellat repellendus voluptatibus
            veniam, ipsam deleniti iste vero aperiam. Doloremque, ullam!
          </p>
          <button
            onClick={() => {
              handleAddToCartButton(singleProduct._id);
            }}
            className="button my-3"
          >
            Add To Cart
          </button>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;

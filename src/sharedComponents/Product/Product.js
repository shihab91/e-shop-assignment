import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ZoomableImage } from "react-rainbow-components";
import "./Product.css";
const Product = ({ products }) => {
  return (
    <Container>
      <Row xs={1} md={3} className="my-5 ">
        {products.map((product) => (
          <Col
            key={product._id}
            className="product d-flex flex-column justify-content-center align-items-center my-5"
          >
            <ZoomableImage src={product.productImage} alt="" />
            <p className="my-3">${product.productPrice}</p>
            <button className="button m-0">Add To Cart</button>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Product;

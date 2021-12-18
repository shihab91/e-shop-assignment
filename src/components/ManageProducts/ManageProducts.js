import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import useProducts from "../../hooks/useProducts";

const ManageProducts = () => {
  const { products } = useProducts();
  const handleDeleteProduct = (id) => {
    fetch(`http://localhost:5000/products?id=${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  return (
    <Container className="mt-5">
      <Row className="gap-5 d-flex justify-content-center align-items-center">
        {products.map((product) => (
          <div className="card mb-3 ps-0" style={{ maxWidth: "540px" }}>
            <Row className="row g-0">
              <Col className="col-md-4 ">
                <img
                  src={product.productImage}
                  className="img-fluid rounded-start "
                  alt="..."
                />
              </Col>
              <Col className="col-md-8 d-flex justify-content-center align-items-center">
                <div className="card-body ">
                  <h3>{product.productName}</h3>
                  <button
                    className="button"
                    onClick={() => {
                      handleDeleteProduct(product._id);
                    }}
                  >
                    Delete
                  </button>
                </div>
              </Col>
            </Row>
          </div>
        ))}
      </Row>
    </Container>
  );
};

export default ManageProducts;

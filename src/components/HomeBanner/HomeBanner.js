import React from "react";
import { Container, Row } from "react-bootstrap";
import bannerImg from "../../assets/images/men-model.png";
import "./HomeBanner.css";
const HomeBanner = () => {
  return (
    <Container>
      <Row
        xs={1}
        md={2}
        className="d-flex justify-content-between align-items-center my-5"
      >
        <div className="home-banner-text">
          <h1>
            CHOOSE THE BEST <br /> FIT FOR YOU
          </h1>
          <p className="w-75 mt-4">
            Innovation will come from an explosion of machine-learning startups.
            For top-tier industry leaders, data is often in good shape, but it’s
            not all held in the same place
          </p>
          <a href="#menTShirts">
            <button className="button mt-4">Start shopping</button>
          </a>
        </div>
        <div>
          <img
            className="float-end me-5 home-banner-img"
            src={bannerImg}
            alt=""
          />
        </div>
      </Row>
    </Container>
  );
};

export default HomeBanner;

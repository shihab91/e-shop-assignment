import React, { useEffect, useState } from "react";
import Product from "../../sharedComponents/Product/Product";
import "./MenTShirt.css";
const MenTShirt = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/men")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <>
      <div className="t-shirt-bg">
        <h1>
          NEW <br /> TEES
        </h1>
      </div>
      <Product products={products} />
    </>
  );
};

export default MenTShirt;

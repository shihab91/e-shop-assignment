import React, { useEffect, useState } from "react";
import Product from "../../sharedComponents/Product/Product";
import "./Shirts.css";
const Shirts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/shirts")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <>
      <div className="product-section shirt-section" id="shirts">
        <h1 className="text-white">
          NEW <br /> SHIRTS
        </h1>
      </div>
      <Product products={products} />
    </>
  );
};

export default Shirts;

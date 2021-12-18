import React from "react";
import { Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
const AddProduct = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    fetch("http://localhost:5000/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
    reset();
  };
  return (
    <Container className="mt-5 d-flex justify-content-center align-items-center flex-column ">
      <form
        action=""
        onSubmit={handleSubmit(onSubmit)}
        className=" d-flex flex-column"
      >
        <label for="product Name">product Name</label>
        <input
          type="text"
          placeholder="productName"
          {...register("productName")}
          required
        />
        <label for="productPrice">product Price</label>
        <input
          type="number"
          placeholder="product Price"
          {...register("productPrice")}
          required
        />
        <label for="category">category</label>
        <select {...register("category")}>
          <option value="category" disabled selected>
            category
          </option>
          <option value="tshirt">tshirt</option>
          <option value="shirt">shirt</option>
        </select>
        <label for="productImage">productImage</label>
        <input
          type="url"
          placeholder="product Image"
          {...register("productImage")}
          required
        />
        <button type="submit" className="submit-button">
          Add Product
        </button>
      </form>
    </Container>
  );
};

export default AddProduct;

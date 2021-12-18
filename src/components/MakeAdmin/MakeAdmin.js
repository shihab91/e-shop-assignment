import React from "react";
import { Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
import "./MakeAdmin.css";
const MakeAdmin = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    const user = { email: data.email };
    fetch("http://localhost:5000/users/admin", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  return (
    <Container className="mt-5 d-flex gap-4 flex-column justify-content-center align-items-center">
      <form
        action=""
        onSubmit={handleSubmit(onSubmit)}
        className=" mt-5 d-flex flex-column"
      >
        <label for="email">Email</label>
        <input
          type="email"
          // className=""
          placeholder="Enter email"
          {...register("email")}
          required
        />
        <button className="button mt-4" type="submit">
          Make Admin
        </button>
      </form>
    </Container>
  );
};

export default MakeAdmin;

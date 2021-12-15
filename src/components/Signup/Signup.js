import React from "react";
import { Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import useAuth from "../../hooks/useAuth";
import "./Signup.css";
const Signup = () => {
  const { register, handleSubmit } = useForm();
  const { createUser, error } = useAuth();
  const navigate = useNavigate();
  const onSubmit = (data) => {
    const { name, email, password } = data;
    createUser(email, password, name);
  };
  return (
    <Container className="mt-5 d-flex justify-content-center align-items-center flex-column ">
      <h4>Sign up</h4>
      <form
        action=""
        onSubmit={handleSubmit(onSubmit)}
        className=" d-flex flex-column"
      >
        <label for="name">Name</label>
        <input type="text" placeholder="Name" {...register("name")} />
        <label for="email">Email</label>
        <input type="email" placeholder="Email" {...register("email")} />
        <label for="password">Password</label>
        <input
          type="password"
          placeholder="Password"
          {...register("password")}
        />
        <button type="submit" className="submit-button">
          Sign up
        </button>
      </form>
      <p
        className="text-decoration-underline mt-3"
        style={{ cursor: "pointer" }}
        onClick={() => {
          navigate("/login");
        }}
      >
        Already signed up? Log in
      </p>
      {error && <p className="text-danger mt-4">{error}</p>}
    </Container>
  );
};

export default Signup;

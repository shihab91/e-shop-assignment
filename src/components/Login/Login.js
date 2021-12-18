import React from "react";
import { Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import useAuth from "../../hooks/useAuth";
import "./Login.css";
const Login = () => {
  const { register, handleSubmit } = useForm();
  const { error, signInUser } = useAuth();
  const navigate = useNavigate();
  const onSubmit = (data) => {
    const { email, password } = data;
    signInUser(email, password);
  };
  return (
    <Container className=" mt-5 d-flex justify-content-center align-items-center flex-column ">
      <h4>Log in</h4>
      <form
        action=""
        onSubmit={handleSubmit(onSubmit)}
        className=" d-flex flex-column"
      >
        <label for="email">Email</label>
        <input
          type="email"
          placeholder="Email"
          {...register("email")}
          required
        />
        <label for="password">Password</label>
        <input
          type="password"
          placeholder="Password"
          {...register("password")}
          required
        />
        <button type="submit" className="submit-button">
          Log in
        </button>
      </form>
      <p
        className="text-decoration-underline mt-3"
        style={{ cursor: "pointer" }}
        onClick={() => {
          navigate("/signup");
        }}
      >
        New User? Sign up
      </p>
      {error && <p className="text-danger mt-4">{error}</p>}
    </Container>
  );
};

export default Login;

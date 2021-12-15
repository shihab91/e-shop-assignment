import React from "react";
import { Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
import "./Login.css";
const Login = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <Container className=" mt-5 d-flex justify-content-center align-items-center flex-column ">
      <h4>Log in</h4>
      <form
        action=""
        onSubmit={handleSubmit(onSubmit)}
        className=" d-flex flex-column"
      >
        <label for="email">Email</label>
        <input type="email" placeholder="Email" {...register("email")} />
        <label for="password">Password</label>
        <input
          type="password"
          placeholder="Password"
          {...register("password")}
        />
        <button type="submit" className="submit-button">
          Log in
        </button>
      </form>
    </Container>
  );
};

export default Login;

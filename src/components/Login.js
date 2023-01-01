import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Button, Container, Form } from "react-bootstrap";

const Login = () => {
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const [token, setToken] = useState("");
  const navigate = useNavigate();
  const handleChange = (event) => {
    setLogin({
      ...login,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      let Data = {
        email: login.email,
        password: login.password,
      };
      await axios
        .post("https://test.employee.tokoweb.xyz/api/login", Data)
        .then((res) => {
          console.log(res.data.data);
          setToken(res.data.data.token);
          console.log(res.data.data.token);
          localStorage.setItem("token", res.data.data.token);
        });
      navigate("/tabledata");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <Form>
        <Form.Group>
          <Form.Label></Form.Label>
          <Form.Control
            placeholder="Email"
            type="text"
            value={login.email}
            onChange={handleChange}
            name="email"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label></Form.Label>
          <Form.Control
            placeholder="Password"
            type="text"
            value={login.password}
            onChange={handleChange}
            name="password"
          />
          <Button className="mt-3" onClick={handleSubmit}>
            Login
          </Button>
        </Form.Group>
      </Form>
    </Container>
  );
};

export default Login;

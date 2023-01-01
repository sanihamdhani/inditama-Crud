import axios from "axios";
import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const CreateData = () => {
  const [create, setCreate] = useState({
    name: "",
    price: "",
  });
  const navigate = useNavigate();

  const handleChange = (event) => {
    setCreate({
      ...create,
      [event.target.name]: event.target.value,
    });
  };

  const CreateData = async (event) => {
    event.preventDefault();

    try {
      let Data = {
        name: create.name,
        price: create.price,
      };
      await axios
        .post("https://test.employee.tokoweb.xyz/api/product/store", Data, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((res) => {
          console.log(res.data);
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
            placeholder="Name"
            type="text"
            value={create.name}
            onChange={handleChange}
            name="name"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label></Form.Label>
          <Form.Control
            placeholder="Price"
            type="text"
            value={create.price}
            onChange={handleChange}
            name="price"
          />
          <Button className="btn-success mt-3" onClick={CreateData}>
            Create Data
          </Button>
        </Form.Group>
      </Form>
    </Container>
  );
};

export default CreateData;

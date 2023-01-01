import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
const UpdateData = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [list, setList] = useState({
    name: "",
    price: "",
  });

  const handleChange = (event) => {
    setList({
      ...list,
      [event.target.name]: event.target.value,
    });
  };

  const HandleUpdate = async (event) => {
    event.preventDefault();

    try {
      let Data = {
        product_id: id,
        name: list.name,
        price: list.price,
      };
      await axios
        .post("https://test.employee.tokoweb.xyz/api/product/update", Data, {
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

  const getId = async () => {
    await axios

      .get(
        `https://test.employee.tokoweb.xyz/api/product/show/?product_id=${id}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      )
      .then((res) => {
        setList({
          name: res.data.data.name,
          price: res.data.data.price,
        });
        console.log(res.data);
      });
  };

  useEffect(() => {
    getId();
  }, [id]);

  return (
    <Container>
      <Form>
        <Form.Group>
          <Form.Label></Form.Label>
          <Form.Control
            placeholder="Name"
            type="text"
            value={list.name}
            onChange={handleChange}
            name="name"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label></Form.Label>
          <Form.Control
            placeholder="Price"
            type="text"
            value={list.price}
            onChange={handleChange}
            name="price"
          />
          <Button className="btn-success mt-3" onClick={HandleUpdate}>
            Update Data
          </Button>
        </Form.Group>
      </Form>
    </Container>
  );
};

export default UpdateData;

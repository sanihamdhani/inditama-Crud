import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Modals from "./Detail";
const TableData = () => {
  const [product, setProduct] = useState([]);
  const navigate = useNavigate();

  const getData = async () => {
    axios
      .get("https://test.employee.tokoweb.xyz/api/product", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        console.log(res.data.data);
        setProduct(res.data.data);
      });
  };

  const DeleteData = async (id) => {
    await axios
      .delete(`https://test.employee.tokoweb.xyz/api/product/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        getData();
      });
  };

  const Logout = async () => {
    try {
      await axios.post("https://test.employee.tokoweb.xyz/api/logout", {
        headers: {
          Authorization: `Bearer ${localStorage.removeItem("token")}`,
        },
      });
    } catch (error) {
      navigate("/");
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="container mt-5">
      <Link to={"/create"}>
        <Button variant="success">Create Data</Button>
      </Link>

      <Button variant="danger" className="m-2" onClick={Logout}>
        Logout
      </Button>
      <Table striped bordered hover className="mt-4">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        {product.map((tkn, index) => {
          return (
            <tbody key={index}>
              <tr>
                <td> {tkn.name}</td>
                <td> {tkn.price}</td>
                <td>
                  <Button
                    variant="danger"
                    className="m-2"
                    onClick={() => DeleteData(tkn.id)}
                  >
                    Delete
                  </Button>
                  <Modals name={tkn.name} price={tkn.price} />
                  <Link to={`/detail/${tkn.id}`}>
                    <Button variant="info">Update Product</Button>
                  </Link>
                </td>
              </tr>
            </tbody>
          );
        })}
      </Table>
    </div>
  );
};

export default TableData;

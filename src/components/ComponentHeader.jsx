import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
class ComponentHeader extends React.Component {
  render() {
    return (
      <div>
        <Navbar bg="primary" expand="lg">
          <Container>
            <Navbar.Brand href="#home" className="text-light">
              INDITAMA
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav"></Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default ComponentHeader;

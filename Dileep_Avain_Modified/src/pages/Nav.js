import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../images/logo.png";
import "./index.css";

export default function Na() {
  return (
    <Navbar
      expand="lg"
      className="nav fixed-top"
      style={{ boxShadow: "0px 0px 4px 0px black" }}
    >
      <Container fluid style={{ background: "rgb(16, 16, 45)" }}>
        <Navbar.Brand href="#">
          <img className="logo-img" src={logo} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" className="bg-light" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" navbarScroll>
            <Nav.Link href="#action1" className="text-light icon">
              GET STARTED
              <article className="ani"></article>
            </Nav.Link>
            <Nav.Link href="#action2" className="text-light icon">
              COMMANDS
              <article className="ani"></article>
            </Nav.Link>
            <Nav.Link href="#action1" className="text-light icon">
              COMMUNITY
              <article className="ani"></article>
            </Nav.Link>
            <Nav.Link href="#action2" className="text-light icon">
              SUPPORT
              <article className="ani"></article>
            </Nav.Link>
            {/* <NavDropdown
              className="text-light"
              title="Link"
              id="navbarScrollingDropdown"
            >
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2 search"
              id="sr"
            />
          </Form>
          <br />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

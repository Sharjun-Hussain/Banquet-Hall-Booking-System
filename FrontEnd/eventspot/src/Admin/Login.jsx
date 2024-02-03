import React, { useState, useEffect } from "react";
import logo from "../Assets/logo1.png";
import { Col, Container, Form, Row, Button } from "react-bootstrap";
import adminLogin from "../Assets/Admin/adminLogin2.png";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { redirect, useNavigate } from "react-router-dom";
import NavBar from "./Navbar";

const Login = () => {
  document.title = "Admin Login";
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [ResponseData, setResponseData] = useState("");

  const HandleSubmit = async (e) => {
    e.preventDefault();

    const response = await axios
      .post(
        "http://localhost:8000/admin/login",
        JSON.stringify({ Email, Password }),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        console.log(response.data);
        toast.success("Login SuccesFull");
        setResponseData(response.data.token);
        localStorage.setItem("token", response.data.token);
        //         // redirect("/admin/dashboard")
        window.location.href = "/admin/dashboard";
        //
      });
  };
  //         // as();

  //     })

  //         .catch(error => {
  //             console.log(error);
  //             toast.error(error.message )
  //         });
  // }

  return (
    <>
      <NavBar />
      <Container fluid>
        <Row style={{ color: "white" }} className="adminLoginContainer">
          <Col
            md={6}
            xs={12}
            className="d-md-flex d-none  justify-content-center align-items-center"
          >
            <div>
              <img src={adminLogin} alt="dfs" width={500} height={350} />
            </div>
          </Col>
          <Col
            md={6}
            xs={12}
            className="d-flex flex-column justify-content-md-center align-items-md-center MobileLoginMargin"
          >
            <Form onSubmit={HandleSubmit}>
              <Container>
                <Row>
                  <Col md={9} className="d-grid">
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>Email address</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="name@example.com"
                        value={Email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }}
                      />
                    </Form.Group>
                    <Form.Group>
                      <Form.Label  htmlFor="inputPassword5">Password</Form.Label>
                      <Form.Control
                        type="password"
                        id="inputPassword5"
                        aria-describedby="passwordHelpBlock"
                        value={Password}
                        onChange={(e) => {
                          setPassword(e.target.value);
                        }}
                      />
                      <Form.Text id="passwordHelpBlock" muted>
                        Your password must be 8-20 characters long, contain
                        letters and numbers, and must not contain spaces,
                        special characters, or emoji.
                      </Form.Text>
                    </Form.Group>
                    <Button type="submit" className="">
                      Submit
                    </Button>
                  </Col>
                </Row>
              </Container>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Login;


import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Login.scss";

const Sucess = () => {
  return (
    <div className="loginWrapper">
      <Container>
        <Row className="justify-content-center">
          <Col className="mt-5">
            <h1 className="loginHeader">Logged in successfully!!!</h1>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Sucess;

import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Login.scss";

const Failure = () => {
  return (
    <div className="loginWrapper">
      <Container>
        <Row className="justify-content-center">
          <Col className="mt-5">
            <h1 className="loginHeader">Something went wrong!!!</h1>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Failure;

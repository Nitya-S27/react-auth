import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { facebookProvider, googleProvider } from "../config/authMethod";
import socialMediaAuth from "./auth";
import { ImFacebook } from "react-icons/im";
import { FcGoogle } from "react-icons/fc";

import "./Login.scss";
const Login = () => {
    const handleOnClick = async (provider) => {
        const res = await socialMediaAuth(provider);
        console.log(res);
    };
    return (
        <div className="loginWrapper">
            <Container>
                <Row className="justify-content-center">
                    <Col className="mt-5">
                        <h1 className="loginHeader">
                            Authentication using Google and Facebook
                        </h1>
                    </Col>
                </Row>
                <Card className="buttonsContainer p-3">
                    <Button
                        className="loginBtn my-3 facebookBtn"
                        onClick={() => handleOnClick(facebookProvider)}
                    >
                        <ImFacebook /> Sign in with Facebook
                    </Button>
                    <Button
                        className="loginBtn my-3 googleBtn"
                        onClick={() => handleOnClick(googleProvider)}
                    >
                        <FcGoogle /> Sign in with Google
                    </Button>
                </Card>
            </Container>
        </div>
    );
};

export default Login;

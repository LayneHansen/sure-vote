import React from "react";
import {
  Card,
  ListGroup,
  ListGroupItem,
  Button,
  Jumbotron,
  ButtonGroup, 
  Col, 
  Row
} from "react-bootstrap";
import './Homepage.css'


const Homepage = () => {

const signUpBtn = () => {
  console.log("hit sign up path");
}

const signInBtn = () => {
  console.log("hit profile path");
}
  return (
      <Row>
          <Col xs lg={3}></Col>
          <Col xs lg={6}>
        <Jumbotron id="main-jumbotron">
        <h1>SURE VOTE</h1>
        <p>
            As soon as you logged on we took a picture of you and captured a fingerprint from your key strokes. Deal wit it.
        </p>
        <br />
        <ButtonGroup size="lg" className="mr-3">
            <Button href="/signup" onClick={signUpBtn()} variant="secondary" id='left-button'>Sign Up</Button>
        </ButtonGroup>
        <ButtonGroup size="lg" className="mr-3">
            <Button href="/profile" onClick={signInBtn()} variant="secondary" id='right-button'>Sign In</Button>
        </ButtonGroup>
        </Jumbotron>
        </Col>
        <Col xs lg={3}></Col>

    </Row>
  );
};

export default Homepage;

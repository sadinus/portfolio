import React from "react";
import styles from "./App.module.css";
import Footer from "../Footer";
import Content from "../Content";
import Header from "../Header";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const App: React.FC = () => {
  return (
    <Container>
      <Row>
        <Col xs="12" lg={{ span: 8, offset: 2 }}>
          <Header />
        </Col>
      </Row>
      <Row>
        <Col>
          <Content />
        </Col>
      </Row>
      <Row>
        <Col xs="12" lg={{ span: 8, offset: 2 }}>
          <Footer />
        </Col>
      </Row>
    </Container>
  );
};

export default App;

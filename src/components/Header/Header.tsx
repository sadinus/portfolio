import React from "react";
import { Button, Nav } from "react-bootstrap";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div>
      <nav
        className="nav justify-content-center nav-pills nav-fill mt-4"
        id="myNav"
      >
        <Nav.Item>
          <Nav.Link href="/home">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/about" className="active">
            About
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">Experience</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="disabled" disabled>
            Disabled
          </Nav.Link>
        </Nav.Item>
      </nav>
    </div>
  );
};

export default Header;

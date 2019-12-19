import React, { MouseEvent, AnchorHTMLAttributes } from "react";
import styles from "./Header.module.css";
import Nav from "../Nav";

const Header = () => {
  const [activeMenuItem, setActiveMenuItem] = React.useState();

  const selectMenuItem = (event: MouseEvent) => {
    event.preventDefault();
    setActiveMenuItem(event.currentTarget.getAttribute("href") as string);
  };

  return <Nav id="mynav" />;
};

export default Header;

import React from "react";
import { NavItem } from "../NavItem";
import styles from "./Nav.module.css";
import { home, portfolio, experience, contact } from "../../types";

const Nav = () => {
  const [activeNavItem, setActiveNavItem] = React.useState("Home");

  const capitalize = (s: string) => {
    if (typeof s !== "string") return "";
    return s.charAt(0).toUpperCase() + s.slice(1);
  };

  return (
    <div className={`sticky-top ${styles.navContainer}`}>
      <div
        className={`justify-content-center nav-pills nav-fill nav col-xs-12 col-lg-8 offset-lg-2`}
        id={"myNav"}
      >
        <NavItem
          href={`#${home}`}
          text={capitalize(home)}
          activeItem={activeNavItem}
          selectNavItem={setActiveNavItem}
        />
        <NavItem
          href={`#${portfolio}`}
          text={capitalize(portfolio)}
          activeItem={activeNavItem}
          selectNavItem={setActiveNavItem}
        />
        <NavItem
          href={`#${experience}`}
          text={capitalize(experience)}
          activeItem={activeNavItem}
          selectNavItem={setActiveNavItem}
        />
        <NavItem
          href={`#${contact}`}
          text={capitalize(contact)}
          activeItem={activeNavItem}
          selectNavItem={setActiveNavItem}
        />
      </div>
    </div>
  );
};

export default Nav;

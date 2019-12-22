import React from "react";
import { NavItem } from "../NavItem";
import styles from "./Nav.module.css";
import { home, portfolio, experience, contact } from "../../types";

const Nav = () => {
  const [activeNavItem, setActiveNavItem] = React.useState("Home");
  const [navHeight, setNavHeight] = React.useState();
  const navRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (navRef && navRef.current) {
      setNavHeight(navRef.current.clientHeight);
    }
  }, [navRef]);

  const capitalize = (s: string) => {
    if (typeof s !== "string") return "";
    return s.charAt(0).toUpperCase() + s.slice(1);
  };

  return (
    <div className={`sticky-top ${styles.navContainer}`} ref={navRef}>
      <div
        className={`justify-content-center nav-pills nav-fill nav col-xs-12 col-lg-8 offset-lg-2`}
        id={"myNav"}
      >
        <NavItem
          href={`#${home}`}
          text={capitalize(home)}
          activeItem={activeNavItem}
          setActiveNavItem={setActiveNavItem}
          navHeight={navHeight}
        />
        <NavItem
          href={`#${portfolio}`}
          text={capitalize(portfolio)}
          activeItem={activeNavItem}
          setActiveNavItem={setActiveNavItem}
          navHeight={navHeight}
        />
        <NavItem
          href={`#${experience}`}
          text={capitalize(experience)}
          activeItem={activeNavItem}
          setActiveNavItem={setActiveNavItem}
          navHeight={navHeight}
        />
        <NavItem
          href={`#${contact}`}
          text={capitalize(contact)}
          activeItem={activeNavItem}
          setActiveNavItem={setActiveNavItem}
          navHeight={navHeight}
        />
      </div>
    </div>
  );
};

export default Nav;

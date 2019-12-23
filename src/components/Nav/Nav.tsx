import React from "react";
import { NavItem } from "../NavItem";
import styles from "./Nav.module.css";
import { home, portfolio, experience, contact } from "../../types";

const Nav = () => {
  const [activeNavItem, setActiveNavItem] = React.useState("home");

  window.addEventListener("scroll", function() {
    const sections = document.querySelectorAll(".section") as NodeListOf<
      HTMLDivElement
    >;

    sections.forEach(section => {
      const currentPosition = window.scrollY;
      const top = section.offsetTop;
      const bottom = section.offsetTop + section.offsetHeight;

      if (
        currentPosition >= top &&
        currentPosition <= bottom &&
        section.id !== activeNavItem
      ) {
        const navItem = document.querySelector(`#${activeNavItem}Nav`);
        navItem && navItem.classList.remove("active");

        setActiveNavItem(section.id);

        const newActiveNavItem = document.querySelector(`#${section.id}Nav`);
        newActiveNavItem && newActiveNavItem.classList.add("active");
      }
    });
  });

  return (
    <div className={`sticky-top ${styles.navContainer}`}>
      <div
        className={`justify-content-center nav-pills nav-fill nav col-xs-12 col-lg-8 offset-lg-2`}
        id={"myNav"}
      >
        <NavItem
          text={home}
          activeItem={activeNavItem}
          setActiveNavItem={setActiveNavItem}
        />
        <NavItem
          text={portfolio}
          activeItem={activeNavItem}
          setActiveNavItem={setActiveNavItem}
        />
        <NavItem
          text={experience}
          activeItem={activeNavItem}
          setActiveNavItem={setActiveNavItem}
        />
        <NavItem
          text={contact}
          activeItem={activeNavItem}
          setActiveNavItem={setActiveNavItem}
        />
      </div>
    </div>
  );
};

export default Nav;

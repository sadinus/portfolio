import React from "react";
import styles from "./Nav.module.css";
import { NavItemName } from "../../types";
import { NavItem } from "../NavItem";

const Nav = () => {
  return (
    <div className={`sticky-top ${styles.navContainer}`}>
      <div
        className={`justify-content-center nav-pills nav-fill nav col-xs-12 col-lg-8 offset-lg-2`}
        id={"myNav"}
      >
        <NavItem itemName={NavItemName.home} />
        <NavItem itemName={NavItemName.portfolio} />
        <NavItem itemName={NavItemName.experience} />
        <NavItem itemName={NavItemName.contact} />
      </div>
    </div>
  );
};
export default Nav;

// window.addEventListener("scroll", function() {
//   sections.forEach(section => {
//     const currentPosition = window.scrollY;
//     const top = section.offsetTop;
//     const bottom = section.offsetTop + section.offsetHeight;

//     if (
//       currentPosition >= top &&
//       currentPosition <= bottom &&
//       section.id !== activeNavItem
//     ) {
//       const navItem = document.querySelector(`#${activeNavItem}Nav`);
//       navItem && navItem.classList.remove("active");

//       setActiveNavItem(section.id);

//       const newActiveNavItem = document.querySelector(`#${section.id}Nav`);
//       newActiveNavItem && newActiveNavItem.classList.add("active");
//     }
//   });
// });

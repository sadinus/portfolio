import React from "react";
import styles from "./NavItem.module.css";
import { NavItemName } from "../../types";

export const NavItem = ({
  itemName,
  currentNavItem,
  sectionTop,
  setCurrentNavItem
}: Props) => {
  const isNavItemActive = currentNavItem === itemName;
  const activeClass = isNavItemActive ? "active" : "";

  const setPageY = (top: number) => {
    window.scrollTo({
      top: top,
      behavior: "smooth"
    });
  };

  const handleClickNavItem = (
    itemName: NavItemName,
    event: React.MouseEvent<HTMLElement>
  ) => {
    event.preventDefault();

    if (!isNavItemActive) {
      setCurrentNavItem(itemName);
      setPageY(sectionTop);
    }
  };

  return (
    <div className="nav-item">
      <a
        className={`nav-link btn btn-outline-primary ${styles.navItem} ${activeClass}`}
        href="/#"
        onClick={e => handleClickNavItem(itemName, e)}
      >
        {itemName}
      </a>
    </div>
  );
};

type Props = {
  itemName: NavItemName;
  currentNavItem: NavItemName;
  sectionTop: number;
  setCurrentNavItem: (navItem: NavItemName) => void;
};

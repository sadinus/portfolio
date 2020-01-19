import React from "react";
import styles from "./NavItem.module.css";
import { NavItemName } from "../../types";
import { setPageY } from "../../shared";

export const NavItem = ({
  itemName,
  currentNavItem,
  sectionTop,
  setCurrentNavItem,
  navHeight
}: Props) => {
  const isNavItemActive = currentNavItem === itemName;
  const activeClass = isNavItemActive ? "active" : "";
  const sectionStart = sectionTop - navHeight;

  const handleClickNavItem = (
    itemName: NavItemName,
    event: React.MouseEvent<HTMLElement>
  ) => {
    event.preventDefault();

    setCurrentNavItem(itemName);
    setPageY(sectionStart);
  };

  return (
    <div className={styles.navItem}>
      <a
        className={`${styles.navLink} ${activeClass}`}
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
  navHeight: number;
};

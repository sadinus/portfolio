import React from "react";
import styles from "./NavItem.module.css";
import { NavItemName, RootAppState } from "../../types";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { MenuActionTypes } from "../../actions/types";
import { setActiveNavItem } from "../../actions";

const NavItem = ({ itemName, activeNavItem, setActiveNavItem }: Props) => {
  const isNavItemActive = activeNavItem === itemName;
  const activeClass = isNavItemActive ? "active" : "";

  // const setPageY = () => {
  //   const sectionOffsetTop = currentSection ? currentSection.offsetTop : 0;
  //   window.scrollTo({
  //     top: sectionOffsetTop,
  //     behavior: "smooth"
  //   });
  // };

  const selectNavItem = () => {
    if (!isNavItemActive) {
      // setPageY();
      setActiveNavItem(itemName);
    }
  };

  return (
    <div className="nav-item">
      <a
        className={`nav-link btn btn-outline-primary ${styles.navItem} ${activeClass}`}
        href="/#"
        onClick={selectNavItem}
      >
        {itemName}
      </a>
    </div>
  );
};

type Props = StateProps & DispatchProps & OwnProps;

type StateProps = {
  activeNavItem: NavItemName;
};

type OwnProps = {
  itemName: NavItemName;
};

type DispatchProps = {
  setActiveNavItem(navItem: NavItemName): void;
};

const mapState = (state: RootAppState) => ({
  activeNavItem: state.navigation.activeNavItem
});

const mapDispatch = (dispatch: Dispatch<MenuActionTypes>, state: OwnProps) => {
  return {
    setActiveNavItem: (navItem: NavItemName) =>
      dispatch(setActiveNavItem(navItem))
  };
};

export default connect(mapState, mapDispatch)(NavItem);

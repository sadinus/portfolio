import React from "react";
import styles from "./NavItem.module.css";

export const NavItem: React.SFC<Props> = ({
  href,
  text,
  activeItem,
  setActiveNavItem,
  navHeight
}) => {
  const activeClass = activeItem === text ? "active" : "";

  const setPageY = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event.preventDefault();
    const section = document.querySelector(href);
    const sectionPageY = section?.getBoundingClientRect().top as number;
    window.scrollTo(0, sectionPageY - navHeight);
    console.log(event.pageY);
  };

  const selectNavItem = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    text: string
  ) => {
    setPageY(event);
    setActiveNavItem(text);
  };

  return (
    <div className="nav-item">
      <a
        className={`nav-link btn btn-outline-primary ${styles.navItem} ${activeClass}`}
        href={href}
        onClick={e => selectNavItem(e, text)}
      >
        {text}
      </a>
    </div>
  );
};

type Props = {
  href: string;
  text: string;
  activeItem: string;
  navHeight: number;
  setActiveNavItem: (navItem: string) => void;
};

// type OwnProps = {
//   href: string;
//   text: string;
// };

// type DispatchProps = {
//   scrollToSection(): void;
// };

// const mapDispatch = (dispatch: Dispatch<MenuActionTypes>, state: OwnProps) => {
//   return {
//     scrollToSection: () => dispatch(scrollAction(state.href))
//   };
// };

// export default connect(null, null)(NavItem);

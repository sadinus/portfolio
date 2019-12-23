import React from "react";
import styles from "./NavItem.module.css";
import { capitalize } from "../../shared";

export const NavItem: React.SFC<Props> = ({
  text,
  activeItem,
  setActiveNavItem
}) => {
  const [currentSection, setCurrentSection] = React.useState();
  const isNavItemActive = activeItem === text;
  const activeClass = isNavItemActive ? "active" : "";
  const href = `#${text}`;

  React.useEffect(() => {
    const section = document.querySelector(href);
    setCurrentSection(section);
  }, [href]);

  const setPageY = () => {
    const sectionOffsetTop = currentSection ? currentSection.offsetTop : 0;
    window.scrollTo({
      top: sectionOffsetTop,
      behavior: "smooth"
    });
  };

  const selectNavItem = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    text: string
  ) => {
    event.preventDefault();

    if (!isNavItemActive) {
      setPageY();
      setActiveNavItem(text);
    }
  };

  return (
    <div className="nav-item">
      <a
        id={`${text}Nav`}
        className={`nav-link btn btn-outline-primary ${styles.navItem} ${activeClass}`}
        href={href}
        onClick={e => selectNavItem(e, text)}
      >
        {capitalize(text)}
      </a>
    </div>
  );
};

type Props = {
  text: string;
  activeItem: string;
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

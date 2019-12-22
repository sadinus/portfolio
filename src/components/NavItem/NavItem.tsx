import React from "react";
import styles from "./NavItem.module.css";

export const NavItem: React.SFC<Props> = ({
  href,
  text,
  activeItem,
  setActiveNavItem
}) => {
  const [currentSection, setCurrentSection] = React.useState();
  const isNavItemActive = activeItem === text;
  const activeClass = isNavItemActive ? "active" : "";

  React.useEffect(() => {
    const section = document.querySelector(href);
    setCurrentSection(section);
  }, [href]);

  // window.addEventListener("scroll", function() {
  //   if (currentSection.getBoundingClientRect().top < window.innerHeight) {
  //     currentSection.classList.add("active");
  //   } else {
  //     currentSection.classList.remove("active");
  //   }
  // });

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

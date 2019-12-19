import React from "react";

export const NavItem: React.SFC<Props> = ({
  href,
  text,
  activeItem,
  selectNavItem
}) => {
  const activeClass = activeItem === text ? "active" : "";

  return (
    <div className="nav-item">
      <a
        className={activeClass}
        href={href}
        onClick={() => selectNavItem(text)}
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
  selectNavItem: (navItem: string) => void;
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

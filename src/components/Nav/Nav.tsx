import React, { FunctionComponent } from "react";
import { NavItem } from "../NavItem";

const Nav: FunctionComponent<Props> = ({ id, children }) => {
  const [activeNavItem, setActiveNavItem] = React.useState("Home");

  return (
    <div className="justify-content-center nav-pills nav-fill mt-4 nav" id={id}>
      <NavItem
        href="#home"
        text="Home"
        activeItem={activeNavItem}
        selectNavItem={setActiveNavItem}
      />
      <NavItem
        href="#portfolio"
        text="Portfolio"
        activeItem={activeNavItem}
        selectNavItem={setActiveNavItem}
      />
      <NavItem
        href="#experience"
        text="Experience"
        activeItem={activeNavItem}
        selectNavItem={setActiveNavItem}
      />
      <NavItem
        href="#contact"
        text="Contact"
        activeItem={activeNavItem}
        selectNavItem={setActiveNavItem}
      />
    </div>
  );
};

type Props = {
  id: string;
};

export default Nav;

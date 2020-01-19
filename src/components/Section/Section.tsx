import React, { ReactChild } from "react";
import { NavItemName } from "../../types";

export const Section = ({
  sectionName,
  currentNavItem,
  setSectionTop,
  setCurrentNavItem,
  children
}: Props) => {
  const sectionRef = React.useRef(document.createElement("div"));

  React.useEffect(() => {
    setSectionTop(sectionRef.current?.offsetTop);
  }, []);

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const top = sectionRef.current.offsetTop;
    const height = sectionRef.current.offsetHeight;
    const bottom = top + height;

    if (scrollY >= top && scrollY <= bottom && currentNavItem !== sectionName) {
      setCurrentNavItem(sectionName);
    }
  };

  return (
    <div ref={sectionRef} className="section">
      <h2>{sectionName}</h2>
      {children}
    </div>
  );
};

type Props = {
  sectionName: NavItemName;
  currentNavItem: NavItemName;
  setSectionTop: (top: number) => void;
  setCurrentNavItem: (navItem: NavItemName) => void;
  children: ReactChild;
};

import React, { ReactChild } from "react";

const Section = ({ headerText, children }: Props) => {
  const sectionRef = React.useRef(null);

  return (
    <div ref={sectionRef} className="section">
      <h2>{headerText}</h2>
      {children}
    </div>
  );
};

type Props = OwnProps;

type OwnProps = {
  headerText: string;
  children: ReactChild;
};

export default Section;

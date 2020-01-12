import React, { Dispatch } from "react";
import { NavItemName, RootAppState } from "../../types";
import { connect } from "react-redux";
import { Section } from "../Section";
import { MenuActionTypes } from "../../actions/types";
import { setCurrentSection } from "../../actions";

const Content = ({
  activeNavItem,
  currentSection,
  setCurrentSection
}: Props) => {
  React.useEffect(() => {}, [currentSection]);

  return (
    <>
      <Section headerText={NavItemName.home}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio
          aperiam maiores doloribus rerum rem vel maxime commodi velit, ipsam
          repellendus accusamus dolores, possimus quidem sapiente laboriosam!
          Voluptas ab velit excepturi. Nulla labore doloribus autem voluptas
          iure repudiandae aperiam eaque perferendis dignissimos dolore sapiente
          inventore a error ducimus asperiores reiciendis corporis harum nemo,
          laborum nihil voluptatum illum in? Praesentium, sunt assumenda!
          Doloremque repellendus quod ut dicta obcaecati, quis quas possimus
          laboriosam quae, dolores vitae sed! Facere a laborum blanditiis. Earum
          officia reprehenderit error tenetur quo consequuntur velit illo et
          necessitatibus debitis.
        </p>
      </Section>
      <Section headerText={NavItemName.portfolio}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio
          aperiam maiores doloribus rerum rem vel maxime commodi velit, ipsam
          repellendus accusamus dolores, possimus quidem sapiente laboriosam!
          Voluptas ab velit excepturi. Nulla labore doloribus autem voluptas
          iure repudiandae aperiam eaque perferendis dignissimos dolore sapiente
          inventore a error ducimus asperiores reiciendis corporis harum nemo,
          laborum nihil voluptatum illum in? Praesentium, sunt assumenda!
          Doloremque repellendus quod ut dicta obcaecati, quis quas possimus
          laboriosam quae, dolores vitae sed! Facere a laborum blanditiis. Earum
          officia reprehenderit error tenetur quo consequuntur velit illo et
          necessitatibus debitis.
        </p>
      </Section>
      <Section headerText={NavItemName.experience}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio
          aperiam maiores doloribus rerum rem vel maxime commodi velit, ipsam
          repellendus accusamus dolores, possimus quidem sapiente laboriosam!
          Voluptas ab velit excepturi. Nulla labore doloribus autem voluptas
          iure repudiandae aperiam eaque perferendis dignissimos dolore sapiente
          inventore a error ducimus asperiores reiciendis corporis harum nemo,
          laborum nihil voluptatum illum in? Praesentium, sunt assumenda!
          Doloremque repellendus quod ut dicta obcaecati, quis quas possimus
          laboriosam quae, dolores vitae sed! Facere a laborum blanditiis. Earum
          officia reprehenderit error tenetur quo consequuntur velit illo et
          necessitatibus debitis.
        </p>
      </Section>
      <Section headerText={NavItemName.contact}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio
          aperiam maiores doloribus rerum rem vel maxime commodi velit, ipsam
          repellendus accusamus dolores, possimus quidem sapiente laboriosam!
          Voluptas ab velit excepturi. Nulla labore doloribus autem voluptas
          iure repudiandae aperiam eaque perferendis dignissimos dolore sapiente
          inventore a error ducimus asperiores reiciendis corporis harum nemo,
          laborum nihil voluptatum illum in? Praesentium, sunt assumenda!
          Doloremque repellendus quod ut dicta obcaecati, quis quas possimus
          laboriosam quae, dolores vitae sed! Facere a laborum blanditiis. Earum
          officia reprehenderit error tenetur quo consequuntur velit illo et
          necessitatibus debitis.
        </p>
      </Section>
    </>
  );
};

type Props = StateProps & DispatchProps;

type StateProps = {
  activeNavItem: NavItemName;
  currentSection: NavItemName;
};

type DispatchProps = {
  setCurrentSection(section: string): void;
};

const mapState = (state: RootAppState) => ({
  currentSection: state.navigation.currentSection,
  activeNavItem: state.navigation.activeNavItem
});

const mapDispatch = (dispatch: Dispatch<MenuActionTypes>) => {
  return {
    setCurrentSection: (section: NavItemName) =>
      dispatch(setCurrentSection(section))
  };
};

export default connect(mapState, mapDispatch)(Content);

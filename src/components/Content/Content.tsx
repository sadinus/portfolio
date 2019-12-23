import React, { MouseEvent } from "react";
import { RootState } from "../../reducers";
import { scrollAction } from "../../actions";
import { home, portfolio, experience, contact, section } from "../../types";

export const Content = () => {
  return (
    <div>
      <section id={home} className={section}>
        <h1>Home</h1>
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
      </section>
      <section id={portfolio} className={section}>
        <h1>Portfolio</h1>
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
      </section>
      <section id={experience} className={section}>
        <h1>Expecience</h1>
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
      </section>
      <section id={contact} className={section}>
        <h1>Contact</h1>
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
      </section>
    </div>
  );
};

type Props = StateProps & DispatchProps;

type StateProps = {
  menuItem: string;
};

type DispatchProps = {
  setMenuItem(menuItem: string): void;
};

export default Content;

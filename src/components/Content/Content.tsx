import React, { MouseEvent, Dispatch } from "react";
import { connect } from "react-redux";
import { RootState } from "../../reducers";
import { scrollAction } from "../../actions";

const mapState = (state: RootState) => ({
  menuItem: state.menuItem
});

const mapDispatch = (item: string) => ({
  setMenuItem: scrollAction(item)
});

export const Content = () => {
  const setPageY = (event: MouseEvent) => {
    event.preventDefault();
    // window.scrollTo(0, pageY);
    console.log(event.pageY);
  };

  return (
    <div>
      <section id="home" onClick={e => setPageY(e)}>
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
      <section id="portfolio" onClick={e => setPageY(e)}>
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
      <section id="experience" onClick={e => setPageY(e)}>
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
      <section id="contact" onClick={e => setPageY(e)}>
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

import React from "react";
import Footer from "../Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { NavItemName } from "../../types";
import { NavItem } from "../NavItem";
import styles from "./App.module.css";
import { Section } from "../Section";

const App: React.FC = () => {
  const [currentNavItem, setCurrentNavItem] = React.useState(NavItemName.home);
  const [homeTop, setHomeTop] = React.useState();
  const [portfolioTop, setPortfolioTop] = React.useState();
  const [experienceTop, setExperienceTop] = React.useState();
  const [contactTop, setContactTop] = React.useState();

  return (
    <>
      <div className={`sticky-top ${styles.navContainer}`}>
        <div
          className={`justify-content-center nav-pills nav-fill nav col-xs-12 col-lg-8 offset-lg-2`}
          id={"myNav"}
        >
          <NavItem
            itemName={NavItemName.home}
            currentNavItem={currentNavItem}
            setCurrentNavItem={setCurrentNavItem}
            sectionTop={homeTop}
          />
          <NavItem
            itemName={NavItemName.portfolio}
            currentNavItem={currentNavItem}
            setCurrentNavItem={setCurrentNavItem}
            sectionTop={portfolioTop}
          />
          <NavItem
            itemName={NavItemName.experience}
            currentNavItem={currentNavItem}
            setCurrentNavItem={setCurrentNavItem}
            sectionTop={experienceTop}
          />
          <NavItem
            itemName={NavItemName.contact}
            currentNavItem={currentNavItem}
            setCurrentNavItem={setCurrentNavItem}
            sectionTop={contactTop}
          />
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-lg-8 offset-lg-2">
            <Section
              sectionName={NavItemName.home}
              currentNavItem={currentNavItem}
              setCurrentNavItem={setCurrentNavItem}
              setSectionTop={setHomeTop}
            >
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio
                aperiam maiores doloribus rerum rem vel maxime commodi velit,
                ipsam repellendus accusamus dolores, possimus quidem sapiente
                laboriosam! Voluptas ab velit excepturi. Nulla labore doloribus
                autem voluptas iure repudiandae aperiam eaque perferendis
                dignissimos dolore sapiente inventore a error ducimus asperiores
                reiciendis corporis harum nemo, laborum nihil voluptatum illum
                in? Praesentium, sunt assumenda! Doloremque repellendus quod ut
                dicta obcaecati, quis quas possimus laboriosam quae, dolores
                vitae sed! Facere a laborum blanditiis. Earum officia
                reprehenderit error tenetur quo consequuntur velit illo et
                necessitatibus debitis.
              </p>
            </Section>
            <Section
              sectionName={NavItemName.portfolio}
              currentNavItem={currentNavItem}
              setCurrentNavItem={setCurrentNavItem}
              setSectionTop={setPortfolioTop}
            >
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio
                aperiam maiores doloribus rerum rem vel maxime commodi velit,
                ipsam repellendus accusamus dolores, possimus quidem sapiente
                laboriosam! Voluptas ab velit excepturi. Nulla labore doloribus
                autem voluptas iure repudiandae aperiam eaque perferendis
                dignissimos dolore sapiente inventore a error ducimus asperiores
                reiciendis corporis harum nemo, laborum nihil voluptatum illum
                in? Praesentium, sunt assumenda! Doloremque repellendus quod ut
                dicta obcaecati, quis quas possimus laboriosam quae, dolores
                vitae sed! Facere a laborum blanditiis. Earum officia
                reprehenderit error tenetur quo consequuntur velit illo et
                necessitatibus debitis.
              </p>
            </Section>
            <Section
              sectionName={NavItemName.experience}
              currentNavItem={currentNavItem}
              setCurrentNavItem={setCurrentNavItem}
              setSectionTop={setExperienceTop}
            >
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio
                aperiam maiores doloribus rerum rem vel maxime commodi velit,
                ipsam repellendus accusamus dolores, possimus quidem sapiente
                laboriosam! Voluptas ab velit excepturi. Nulla labore doloribus
                autem voluptas iure repudiandae aperiam eaque perferendis
                dignissimos dolore sapiente inventore a error ducimus asperiores
                reiciendis corporis harum nemo, laborum nihil voluptatum illum
                in? Praesentium, sunt assumenda! Doloremque repellendus quod ut
                dicta obcaecati, quis quas possimus laboriosam quae, dolores
                vitae sed! Facere a laborum blanditiis. Earum officia
                reprehenderit error tenetur quo consequuntur velit illo et
                necessitatibus debitis.
              </p>
            </Section>
            <Section
              sectionName={NavItemName.contact}
              currentNavItem={currentNavItem}
              setCurrentNavItem={setCurrentNavItem}
              setSectionTop={setContactTop}
            >
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio
                aperiam maiores doloribus rerum rem vel maxime commodi velit,
                ipsam repellendus accusamus dolores, possimus quidem sapiente
                laboriosam! Voluptas ab velit excepturi. Nulla labore doloribus
                autem voluptas iure repudiandae aperiam eaque perferendis
                dignissimos dolore sapiente inventore a error ducimus asperiores
                reiciendis corporis harum nemo, laborum nihil voluptatum illum
                in? Praesentium, sunt assumenda! Doloremque repellendus quod ut
                dicta obcaecati, quis quas possimus laboriosam quae, dolores
                vitae sed! Facere a laborum blanditiis. Earum officia
                reprehenderit error tenetur quo consequuntur velit illo et
                necessitatibus debitis. Praesentium, sunt assumenda! Doloremque
                repellendus quod ut dicta obcaecati, quis quas possimus
                laboriosam quae, dolores vitae sed! Facere a laborum blanditiis.
                Earum officia reprehenderit error tenetur quo consequuntur velit
                illo et necessitatibus debitis. Praesentium, sunt assumenda!
                Doloremque repellendus quod ut dicta obcaecati, quis quas
                possimus laboriosam quae, dolores vitae sed! Facere a laborum
                blanditiis. Earum officia reprehenderit error tenetur quo
                consequuntur velit illo et necessitatibus debitis.
              </p>
            </Section>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;

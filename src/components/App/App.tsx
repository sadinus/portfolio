import React from "react";
import Footer from "../Footer";
import { NavItemName } from "../../types";
import { NavItem } from "../NavItem";
import { Section } from "../Section";
import "./App.css";
import styles from "./App.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { setPageY } from "../../shared";

const App: React.FC = () => {
  const [currentNavItem, setCurrentNavItem] = React.useState();
  const [homeTop, setHomeTop] = React.useState();
  const [portfolioTop, setPortfolioTop] = React.useState();
  const [experienceTop, setExperienceTop] = React.useState();
  const [contactTop, setContactTop] = React.useState();
  const navRef = React.useRef<HTMLDivElement>(document.createElement("div"));
  const sectionStart = homeTop - navRef.current.offsetHeight;

  return (
    <>
      <div className={styles.welcomeSection}>
        <div className={styles.welcomeWrapper}>
          <img
            className={styles.welcomeImage}
            src="/portrait.png"
            alt="Myself"
          />
          <br />
          <span className={styles.welcomeTitle}>React/.NET Developer</span>
          <div
            className={styles.arrowButton}
            onClick={() => setPageY(sectionStart)}
          >
            <FontAwesomeIcon icon={faAngleDown} size="lg" />
          </div>
        </div>
      </div>
      <div ref={navRef} className={styles.nav}>
        <NavItem
          itemName={NavItemName.home}
          currentNavItem={currentNavItem}
          setCurrentNavItem={setCurrentNavItem}
          sectionTop={homeTop}
          navHeight={navRef.current.offsetHeight}
        />
        <NavItem
          itemName={NavItemName.portfolio}
          currentNavItem={currentNavItem}
          setCurrentNavItem={setCurrentNavItem}
          sectionTop={portfolioTop}
          navHeight={navRef.current.offsetHeight}
        />
        <NavItem
          itemName={NavItemName.experience}
          currentNavItem={currentNavItem}
          setCurrentNavItem={setCurrentNavItem}
          sectionTop={experienceTop}
          navHeight={navRef.current.offsetHeight}
        />
        <NavItem
          itemName={NavItemName.contact}
          currentNavItem={currentNavItem}
          setCurrentNavItem={setCurrentNavItem}
          sectionTop={contactTop}
          navHeight={navRef.current.offsetHeight}
        />
      </div>
      <div className="sections">
        <Section
          sectionName={NavItemName.home}
          currentNavItem={currentNavItem}
          setCurrentNavItem={setCurrentNavItem}
          setSectionTop={setHomeTop}
        >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio
            aperiam maiores doloribus rerum rem vel maxime commodi velit, ipsam
            repellendus accusamus dolores, possimus quidem sapiente laboriosam!
            Voluptas ab velit excepturi. Nulla labore doloribus autem voluptas
            iure repudiandae aperiam eaque perferendis dignissimos dolore
            sapiente inventore a error ducimus asperiores reiciendis corporis
            harum nemo, laborum nihil voluptatum illum in? Praesentium, sunt
            assumenda! Doloremque repellendus quod ut dicta obcaecati, quis quas
            possimus laboriosam quae, dolores vitae sed! Facere a laborum
            blanditiis. Earum officia reprehenderit error tenetur quo
            consequuntur velit illo et necessitatibus debitis.
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
            aperiam maiores doloribus rerum rem vel maxime commodi velit, ipsam
            repellendus accusamus dolores, possimus quidem sapiente laboriosam!
            Voluptas ab velit excepturi. Nulla labore doloribus autem voluptas
            iure repudiandae aperiam eaque perferendis dignissimos dolore
            sapiente inventore a error ducimus asperiores reiciendis corporis
            harum nemo, laborum nihil voluptatum illum in? Praesentium, sunt
            assumenda! Doloremque repellendus quod ut dicta obcaecati, quis quas
            possimus laboriosam quae, dolores vitae sed! Facere a laborum
            blanditiis. Earum officia reprehenderit error tenetur quo
            consequuntur velit illo et necessitatibus debitis.
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
            aperiam maiores doloribus rerum rem vel maxime commodi velit, ipsam
            repellendus accusamus dolores, possimus quidem sapiente laboriosam!
            Voluptas ab velit excepturi. Nulla labore doloribus autem voluptas
            iure repudiandae aperiam eaque perferendis dignissimos dolore
            sapiente inventore a error ducimus asperiores reiciendis corporis
            harum nemo, laborum nihil voluptatum illum in? Praesentium, sunt
            assumenda! Doloremque repellendus quod ut dicta obcaecati, quis quas
            possimus laboriosam quae, dolores vitae sed! Facere a laborum
            blanditiis. Earum officia reprehenderit error tenetur quo
            consequuntur velit illo et necessitatibus debitis.
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
            aperiam maiores doloribus rerum rem vel maxime commodi velit, ipsam
            repellendus accusamus dolores, possimus quidem sapiente laboriosam!
            Voluptas ab velit excepturi. Nulla labore doloribus autem voluptas
            iure repudiandae aperiam eaque perferendis dignissimos dolore
            sapiente inventore a error ducimus asperiores reiciendis corporis
            harum nemo, laborum nihil voluptatum illum in? Praesentium, sunt
            assumenda! Doloremque repellendus quod ut dicta obcaecati, quis quas
            possimus laboriosam quae, dolores vitae sed! Facere a laborum
            blanditiis. Earum officia reprehenderit error tenetur quo
            consequuntur velit illo et necessitatibus debitis. Praesentium, sunt
            assumenda! Doloremque repellendus quod ut dicta obcaecati, quis quas
            possimus laboriosam quae, dolores vitae sed! Facere a laborum
            blanditiis. Earum officia reprehenderit error tenetur quo
            consequuntur velit illo et necessitatibus debitis. Praesentium, sunt
            assumenda! Doloremque repellendus quod ut dicta obcaecati, quis quas
            possimus laboriosam quae, dolores vitae sed! Facere a laborum
            blanditiis. Earum officia reprehenderit error tenetur quo
            consequuntur velit illo et necessitatibus debitis.
          </p>
        </Section>
        <Footer />
      </div>
    </>
  );
};

export default App;

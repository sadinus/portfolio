import React from "react";
import styles from "./App.module.css";
import Footer from "../Footer";
import Content from "../Content";
import Header from "../Header";
import "bootstrap/dist/css/bootstrap.min.css";

const App: React.FC = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-xs-12 col-lg-8 offset-lg-2">
          <Header />
          <Content />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;

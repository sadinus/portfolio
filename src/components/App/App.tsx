import React from "react";
import Footer from "../Footer";
import Content from "../Content";
import Nav from "../Nav";
import "bootstrap/dist/css/bootstrap.min.css";

const App: React.FC = () => {
  return (
    <>
      <Nav />
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-lg-8 offset-lg-2">
            <Content />
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;

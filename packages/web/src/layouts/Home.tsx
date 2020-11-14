import React from "react";
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import logo from "../assets/logo.png";
import Lead from "../components/Lead";

function Home() {
  return (
    <section className="Home">
      <div className="Home__header">
        <Header
          navigation={<Navigation />}
          logo={<img src={logo} alt="We Track logo" className="Header__logo" />}
        />
      </div>
      <section className="Home__lead">
        <Lead />
      </section>
    </section>
  );
}

export default Home;

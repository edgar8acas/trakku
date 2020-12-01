import React from "react";
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import HomeLogo from "../assets/HomeLogo";
import Lead from "../components/Lead";

function Home() {
  return (
    <section className="Home">
      <div className="Home__header">
        <Header navigation={<Navigation />} logo={<HomeLogo />} />
      </div>
      <section className="Home__lead">
        <Lead />
      </section>
    </section>
  );
}

export default Home;

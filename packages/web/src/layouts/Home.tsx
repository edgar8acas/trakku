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
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="Home-curved-shape"
      >
        <path
          fill="#222222"
          fill-opacity="1"
          d="M0,128L120,138.7C240,149,480,171,720,149.3C960,128,1200,64,1320,32L1440,0L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
        ></path>
      </svg>
    </section>
  );
}

export default Home;

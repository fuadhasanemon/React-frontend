import React from "react";
import Header from "../../components/Header/Header";
import "./home.scss";

const Home = () => {
  return (
    <>
      <Header />

      <div className="home-page py-5">
        <div className="container">
          <div className="row">
            <h2>Home page</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam,
              hic rem amet molestiae quasi sint necessitatibus commodi quidem
              dolorum non.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

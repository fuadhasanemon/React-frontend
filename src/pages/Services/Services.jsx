import React from "react";
import Header from "../../components/Header/Header";
import "./services.scss";

const Services = () => {
  const handleReadMore = (e) => {
    alert("Hi Fuad");
    prompt("Enter your name");
  };

  return (
    <>
      <Header />
      <div className="service-page py-5">
        <div className="container">
          <div className="row">
            <h2>Services page</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam,
              hic rem amet molestiae quasi sint necessitatibus commodi quidem
              dolorum non.
            </p>
            <button
              href="#"
              className="btn btn-primary d-inline-block"
              onClick={handleReadMore}
            >
              Read More
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;

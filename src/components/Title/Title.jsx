import React from "react";
import "./title.scss";

const Title = ({ title, subtitle, divider }) => {
  return (
    <>
      <div className="section-title">
        <h2>{title}</h2>
        <p className="mb-3">{subtitle}</p>

        {divider && <div className="divider"></div>}
      </div>
    </>
  );
};

export default Title;

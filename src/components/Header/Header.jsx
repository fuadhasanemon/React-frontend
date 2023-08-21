import React from "react";
import { Link } from "react-router-dom";
import "./header.scss";

const Header = () => {
  return (
    <>
      <nav className="shadow-sm">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="logo">
                <span className="h2">
                  <Link to="/">NavBar Logo</Link>
                </span>
              </div>
            </div>

            <div className="col-md-9">
              <div className="manu_list">
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/services">Services</Link>
                  </li>
                  <li>
                    <Link to="/shop">Shop</Link>
                  </li>
                  <li>
                    <Link to="/team">Team</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;

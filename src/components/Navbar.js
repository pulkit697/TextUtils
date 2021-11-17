import React from "react";
import PropTypes from "prop-types";
import { SunIcon } from "./icons/SunIcon";
import { MoonIcon } from "./icons/MoonIcon";
import { Link } from "react-router-dom";

export const Navbar = (props) => {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.darkMode}`}
      style={{
        backgroundColor: props.darkMode === "light" ? "#CEE5D0" : "#3b0202",
      }}
    >
      <Link className="navbar-brand" to="/">
        {props.title}
      </Link>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/">
              Home <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">
              {props.about_text}
            </Link>
          </li>
        </ul>
        <div
          className="float-right m-3"
          style={{
            cursor: "pointer",
            display: "inline-block",
            backgroundColor:
              'props.darkMode === "light" ? "#F8F9FA" : "#3b0202",',
          }}
          onClick={props.toggleTheme}
        >
          {props.darkMode === "dark" ? <SunIcon /> : <MoonIcon />}
        </div>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  about_text: PropTypes.string,
};

Navbar.defaultProps = {
  title: "Title Will be Displayed Here",
  about_text: "About",
};

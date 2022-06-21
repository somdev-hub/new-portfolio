import React from "react";
import "./Navbar.css";
import Toggle from "../Toggle/Toggle";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <div className="n-wrapper" id="Navbar">
      <div className="n-left">
        <div className="n-name">Somdev</div>
        <Toggle />
      </div>
      <div className="n-right">
        <div className="n-list">
          <ul>
            <li>
              <Link
                activeClass="active"
                to="Navbar"
                spy={true}
                smooth={true}
              ></Link>
              Home
            </li>
            <li>
              <Link activeClass="active" to="services" spy={true} smooth={true}>
                Services
              </Link>
            </li>
            <li>
              <Link activeClass="active" to="works" spy={true} smooth={true}>
                Experience
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="portfolio"
                spy={true}
                smooth={true}
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="testimonials"
                spy={true}
                smooth={true}
              >
                Testimonials
              </Link>
            </li>
          </ul>
        </div>
        <Link activeClass="active" to="contact" spy={true} smooth={true}>

        <button className="button n-button">Contact Us</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

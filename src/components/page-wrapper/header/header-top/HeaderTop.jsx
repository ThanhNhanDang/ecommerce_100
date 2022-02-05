import React from "react";
import { Link } from "react-router-dom";
import DropdownLanguage from "./DropdownLanguage";
import DropdownMoney from "./DropdownMoney";

function HeaderTop() {
  return (
    <div className="header-top">
      <div className="container">
        <div className="header-left">
          <ul className="top-menu">
            <li>
              <a href="/#">Links</a>
              <ul>
                <li>
                  <a href="tel:#">
                    <i className="icon-phone"></i>Call: +0123 456 789
                  </a>
                </li>
                <li>
                  <Link to="/about-us">About</Link>
                </li>
                <li>
                  <Link to="/contact-us">Contact</Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="header-right">
          <ul className="top-menu top-link-menu">
            <li>
              <a href="/#">Links</a>
              <ul>
                <li>
                  <a href="#signin-modal" data-toggle="modal">
                    Sign in / Sign up
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          <DropdownMoney />
          <DropdownLanguage />
        </div>
      </div>
    </div>
  );
}

export default HeaderTop;

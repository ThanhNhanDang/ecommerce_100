import React from "react";
import DropdownLanguage from "./DropdownLanguage";
import DropdownMoney from "./DropdownMoney";

function HeaderTop() {
  return (
    <div className="header-top">
      <div className="container">
        <div className="header-left">
          <a href="tel:#">
            <i className="icon-phone"></i>Call: +0123 456 789
          </a>
        </div>
        <div className="header-right">
          <ul className="top-menu">
            <li>
              <a href="/">Links</a>
              <ul>
                <li>
                  <DropdownMoney />
                </li>
                <li>
                  <DropdownLanguage />
                </li>
                <li>
                  <a href="#signin-modal" data-toggle="modal">
                    Sign in / Sign up
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default HeaderTop;

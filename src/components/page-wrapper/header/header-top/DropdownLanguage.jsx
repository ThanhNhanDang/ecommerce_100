import React from "react";
import { Link } from "react-router-dom";

function DropdownLanguage() {
  return (
    <div className="header-dropdown">
      <Link to="/">English</Link>
      <div className="header-menu">
        <ul>
          <li>
            <Link to="/">English</Link>
          </li>
          <li>
            <Link to="/">French</Link>
          </li>
          <li>
            <Link to="/">Spanish</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default DropdownLanguage;

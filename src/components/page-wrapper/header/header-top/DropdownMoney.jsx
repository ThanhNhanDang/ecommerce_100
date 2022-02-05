import React from "react";
import { Link } from "react-router-dom";

function DropdownMoney() {
  return (
    <div className="header-dropdown">
      <Link to="/">USD</Link>
      <div className="header-menu">
        <ul>
          <li>
            <Link to="/">Eur</Link>
          </li>
          <li>
            <Link to="/">Usd</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default DropdownMoney;

import React from "react";

function DropdownMoney() {
  return (
    <div className="header-dropdown">
      <a href="/">USD</a>
      <div className="header-menu">
        <ul>
          <li>
            <a href="/">Eur</a>
          </li>
          <li>
            <a href="/">Usd</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default DropdownMoney;

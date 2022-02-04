import React from "react";
import { Link } from "react-router-dom";

const categories = [
  { id: 1, name: "Beds" },
  { id: 2, name: "Lighting" },
  { id: 3, name: "Sofas & Sleeper sofas" },
  { id: 4, name: "BStorageeds" },
  { id: 5, name: "Armchairs & Chaises" },
  { id: 6, name: "Decoration" },
  { id: 7, name: "Kitchen Cabinets" },
  { id: 8, name: "Coffee & Tables" },
  { id: 9, name: "Outdoor Furniture" },
];

function HeaderBottomLeft() {
  return (
    <div className="header-left">
      <div className="dropdown category-dropdown">
        <a
          href="/#"
          className="dropdown-toggle"
          role="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
          data-display="static"
          title="Browse Categories"
        >
          Browse Categories <i className="icon-angle-down"></i>
        </a>
        <div className="dropdown-menu">
          <nav className="side-nav">
            <ul className="menu-vertical sf-arrows">
              <li className="item-lead">
                <a href="/#">Daily offers</a>
              </li>
              <li className="item-lead">
                <a href="/#">Gift Ideas</a>
              </li>
              {categories.map((item) => (
                <li key={item.id}>
                  <Link active="active" to={"/shop/grid-3-columns/" + item.id}>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default HeaderBottomLeft;

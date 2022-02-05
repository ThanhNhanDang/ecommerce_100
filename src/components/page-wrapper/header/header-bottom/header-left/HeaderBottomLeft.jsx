import React from "react";
import { Link, NavLink } from "react-router-dom";
import {
  categoriesClothing,
  categoriesCooking,
  categoriesDropdown,
} from "../../../../../data";

const categories = [
  { id: 1, name: "Beds" },
  { id: 2, name: "Lighting" },
  { id: 3, name: "Sofas & Sleeper sofas" },
  { id: 4, name: "BStorageeds" },
  { id: 5, name: "Armchairs & Chaises" },
  { id: 6, name: "Decoration" },
  { id: 7, name: "Kitchen Cabinets" },
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
              {categoriesDropdown.map((item) => (
                <li key={item.id} className="megamenu-container">
                  <Link
                    to={"/shop/grid-3-columns/" + item.id}
                    className={item.row && "sf-with-ul"}
                  >
                    {item.name}
                  </Link>
                  <div class="megamenu">
                    <div class="row no-gutters">
                      <div class="col-md-8">
                        <div class="menu-col">
                          <div class="row">
                            {item.row.map((item) => (
                              <div class="col-md-6" key={item.id}>
                                {item.title.map((item) => (
                                  <React.Fragment key={item.id}>
                                    <div class="menu-title">{item.tle}</div>
                                    <ul>
                                      {item.li.map((item) => (
                                        <li key={item}>
                                          <NavLink
                                            to={`/shop/grid-3-columns/${item}`}
                                          >
                                            {item}
                                          </NavLink>
                                        </li>
                                      ))}
                                    </ul>
                                  </React.Fragment>
                                ))}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div class="col-md-4">{item.baner}</div>
                    </div>
                  </div>
                </li>
              ))}
              <li class="megamenu-container">
                <NavLink to="/shop/grid-3-columns" class="sf-with-ul">
                  {categoriesCooking.name}
                </NavLink>
                <div class="megamenu">
                  <div class="menu-col">
                    <div class="row">
                      {categoriesCooking.row.map((item) => (
                        <div class="col-md-4" key={item.id}>
                          <div class="menu-title">{item.title}</div>
                          <ul>
                            {item.li.map((item, index) => (
                              <li key={index}>
                                <NavLink to="/shop/grid-3-columns">
                                  {item}
                                </NavLink>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                    <div class="row menu-banners">
                      {categoriesCooking.banner.map((item, index) => (
                        <div class="col-md-4" key={index}>
                          <div class="banner">
                            <NavLink to="/shop/grid-3-columns">
                              <img src={item} alt="image" />
                            </NavLink>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </li>
              <li class="megamenu-container">
                <NavLink to="/shop/grid-3-columns" class="sf-with-ul">
                  {categoriesClothing.name}
                </NavLink>
                <div class="megamenu">
                  <div class="row no-gutters">
                    <div class="col-md-8">
                      <div class="menu-col">
                        <div class="row">
                          {categoriesClothing.row.map((item) => (
                            <div class="col-md-6" key={item.id}>
                              <div class="menu-title">{item.title}</div>
                              <ul>
                                {item.li.map((item, index) => (
                                  <li key={index}>
                                    <NavLink to="/shop/grid-3-columns">
                                      {item.strong ? (
                                        <strong>{item.name}</strong>
                                      ) : (
                                        item.name
                                      )}
                                    </NavLink>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="banner banner-overlay">
                        <NavLink
                          to="/shop/grid-3-columns"
                          class="banner banner-menu"
                        >
                          <img src={categoriesClothing.banner} alt="Banner" />
                        </NavLink>
                      </div>
                    </div>
                  </div>
                  <div class="menu-col menu-brands">
                    <div class="row">
                      {categoriesClothing.brands.map((item, index) => (
                        <div key={index} class="col-lg-2">
                          <NavLink to="/shop/grid-3-columns" class="brand">
                            <img src={item} alt="Brand Name" />
                          </NavLink>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </li>
              <li className="item-lead">
                <a href="/#">Gift Ideas</a>
              </li>
              {categories.map((item) => (
                <li key={item.id}>
                  <Link to={"/shop/grid-3-columns/" + item.id}>
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

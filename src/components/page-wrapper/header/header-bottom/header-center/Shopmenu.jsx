import React from "react";
import { Link } from "react-router-dom";

const shops = [
  {
    id: 1,
    title: "Shop with sidebar",
    items: [
      {
        link: "/shop/grid-1-columns",
        name: "Shop List",
        new: false,
        hot: false,
      },
      {
        link: "/shop/grid-2-columns",
        name: "Shop Grid 2 Columns",
        new: false,
        hot: false,
      },
      {
        link: "/shop/grid-3-columns",
        name: "Shop Grid 3 Columns",
        new: false,
        hot: true,
      },
      {
        link: "/shop/grid-4-columns",
        name: "Shop Grid 4 Columns",
        new: true,
        hot: false,
      },
    ],
  },
  {
    id: 2,
    title: "Shop no sidebar",
    items: [
      {
        link: "/shop/grid-1-columns",
        name: "Shop Boxed No Sidebar",
        new: false,
        hot: false,
      },
      {
        link: "/shop/grid-2-columns",
        name: "Shop Grid 2 Columns",
        new: false,
        hot: false,
      },
      {
        link: "/shop/grid-3-columns",
        name: "Shop Grid 3 Columns",
        new: false,
        hot: true,
      },
      {
        link: "/shop/grid-4-columns",
        name: "Shop Grid 4 Columns",
        new: true,
        hot: false,
      },
    ],
  },
  
];

function Shopmenu() {
  return (
    <li>
      <Link to="/shop/grid-3-columns" class="sf-with-ul">
        Shop
      </Link>
      <div class="megamenu megamenu-md">
        <div class="row no-gutters">
          <div class="col-md-8">
            <div class="menu-col">
              <div class="row">
                <div class="col-md-6">
                  {shops.map((item) => (
                    <React.Fragment key={item.id}>
                      <div class="menu-title">{item.title}</div>
                      <ul>
                        {item.items.map((i, index) => (
                          <li key={index}>
                            <Link to={i.link}>
                              {i.new == i.hot ? (
                                i.name
                              ) : i.new ? (
                                <span>
                                  {i.name}
                                  <span class="tip tip-new">New</span>
                                </span>
                              ) : i.hot ? (
                                <span>
                                  {i.name}
                                  <span class="tip tip-hot">Hot</span>
                                </span>
                              ) : null}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}

export default Shopmenu;

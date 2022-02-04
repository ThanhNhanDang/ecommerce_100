import React from "react";
import { Link } from "react-router-dom";

const shops = [
  {
    id: 1,
    md6: [
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
            link: "/shop/boxed-no-sidebar",
            name: "Shop Boxed No Sidebar",
            new: false,
            hot: true,
          },
          {
            link: "/shop/fullwidth-no-sidebar",
            name: "Shop Fullwidth No Sidebar",
            new: false,
            hot: false,
          },
        ],
      },
    ],
  },
  {
    id: 2,
    md6: [
      {
        id: 1,
        title: "Product Category",
        items: [
          {
            link: "/shop/product-category-boxed",
            name: "Product Category Boxed",
            new: true,
            hot: false,
          },
          {
            link: "/shop/product-category-fullwidth",
            name: "Product Category Fullwidth",
            new: false,
            hot: false,
          },
        ],
      },
      {
        id: 2,
        title: "Shop Pages",
        items: [
          {
            link: "/my-cart",
            name: "Cart",
            new: false,
            hot: false,
          },
          {
            link: "/checkout",
            name: "Checkout",
            new: false,
            hot: false,
          },
          {
            link: "/wishlist",
            name: "Wishlist",
            new: false,
            hot: false,
          },
          {
            link: "/my-account",
            name: "My Account",
            new: false,
            hot: false,
          },
        ],
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
                {shops.map((item) => (
                  <div class="col-md-6" key={item.id}>
                    {item.md6.map((item) => (
                      <React.Fragment key={item.id}>
                        <div class="menu-title">{item.title}</div>
                        <ul>
                          {item.items.map((i, index) => (
                            <li key={index}>
                              <Link to={i.link}>
                                {i.new === i.hot ? (
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
                ))}
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="banner banner-overlay">
              <a href="category.html" class="banner banner-menu">
                <img src="/assets/images/menu/banner-1.jpg" alt="Banner" />

                <div class="banner-content banner-content-top">
                  <div class="banner-title text-white">
                    Last <br />
                    Chance
                    <br />
                    <span>
                      <strong>Sale</strong>
                    </span>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}

export default Shopmenu;

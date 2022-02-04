import React from "react";
import { Link } from "react-router-dom";

const shops = [
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
];

function NavMenu() {
  return (
    <div
      class="tab-pane fade show active"
      id="mobile-menu-tab"
      role="tabpanel"
      aria-labelledby="mobile-menu-link"
    >
      <nav class="mobile-nav">
        <ul class="mobile-menu">
          <li class="active">
            <Link to="/">Home</Link>

            <ul>
              <li>
                <Link to="/">01 - electronic store</Link>
              </li>
              <li>
                <Link to="/home2">02 - electronic store</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/shop/grid-3-columns">Shop</Link>
            <ul>
              {shops.map((i, index) => (
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
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavMenu;

import React from "react";
import { Link } from "react-router-dom";

const categories = [
  "Beds",
  "Lighting",
  "Sofas & Sleeper sofas",
  "BStorageeds",
  "Armchairs & Chaises",
  "Decoration",
  "Kitchen Cabinets",
  "Coffee & Tables",
  "Outdoor Furniture",
  "Desktop Computers",
  "Monitors",
  "Laptops",
  "iPad & Tablets",
  "Hard Drives & Storage",
  "Printers & Supplies",
  "Computer Accessories",
  "TVs",
  "Home Audio Speakers",
  "Projectors",
  "Media Streaming Devices",
  "Carrier Phones",
  "Unlocked Phones",
  "Phone & Cellphone Cases",
  "Cellphone Chargers",
  "Digital SLR Cameras",
  "Sports & Action Cameras",
  "Camcorders",
  "Camera Lenses",
  "Photo Printer",
  "Digital Memory Cards",
  "Camera Bags, Backpacks & Cases",
];

function NavCategories() {
  return (
    <div
      className="tab-pane fade"
      id="mobile-cats-tab"
      role="tabpanel"
      aria-labelledby="mobile-cats-link"
    >
      <nav className="mobile-cats-nav">
        <ul className="mobile-cats-menu">
          <li>
            <Link to={"/shop/grid-3-columns/"} className="mobile-cats-lead">
              Gift Ideas
            </Link>
          </li>
          {categories.map((item, index) => (
            <li key={index}>
              <Link to={"/shop/grid-3-columns/"}>{item}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default NavCategories;

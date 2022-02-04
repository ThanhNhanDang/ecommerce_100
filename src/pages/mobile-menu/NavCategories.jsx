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

function NavCategories() {
  return (
    <div
      class="tab-pane fade"
      id="mobile-cats-tab"
      role="tabpanel"
      aria-labelledby="mobile-cats-link"
    >
      <nav class="mobile-cats-nav">
        <ul class="mobile-cats-menu">
          <li>
            <a class="mobile-cats-lead" href="/#">
              Daily offers
            </a>
          </li>
          <li>
            <a class="mobile-cats-lead" href="/#">
              Gift Ideas
            </a>
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
  );
}

export default NavCategories;

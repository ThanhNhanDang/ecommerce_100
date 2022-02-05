import React from "react";
import { Link } from "react-router-dom";
import BrandSidebar from "./BrandSidebar";
import CategoriesSidebar from "./CategoriesSidebar";
import ColourSidebar from "./ColourSidebar";
import PriceSidebar from "./PriceSidebar";
import SizeSidebar from "./SizeSidebar";

function Sidebar() {
  return (
    <aside class="col-lg-3 order-lg-first">
      <div class="sidebar sidebar-shop">
        <div class="widget widget-clean">
          <label>Filters:</label>
          <Link to="#" class="sidebar-filter-clear">
            Clean All
          </Link>
        </div>
        <CategoriesSidebar />
        <SizeSidebar />
        <ColourSidebar />
        <BrandSidebar />
        <PriceSidebar />
      </div>
    </aside>
  );
}

export default Sidebar;

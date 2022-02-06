import React from "react";
import { Link } from "react-router-dom";
import BrandSidebar from "./BrandSidebar";
import CategoriesSidebar from "./CategoriesSidebar";
import ColourSidebar from "./ColourSidebar";
import PriceSidebar from "./PriceSidebar";
import SizeSidebar from "./SizeSidebar";

function Sidebar() {
  return (
    <aside className="col-lg-3 order-lg-first">
      <div className="sidebar sidebar-shop">
        <div className="widget widget-clean">
          <label>Filters:</label>
          <Link to="#" className="sidebar-filter-clear">
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

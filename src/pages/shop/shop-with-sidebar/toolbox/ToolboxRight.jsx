import React from "react";
import { NavLink } from "react-router-dom";

function ToolboxRight() {
  return (
    <div className="toolbox-right">
      <div className="toolbox-sort">
        <label for="sortby">Sort by:</label>
        <div className="select-custom">
          <select name="sortby" id="sortby" className="form-control">
            <option value="popularity" selected="selected">
              Most Popular
            </option>
            <option value="rating">Most Rated</option>
            <option value="date">Date</option>
          </select>
        </div>
      </div>
      <div className="toolbox-layout">
        <NavLink to="/shop/grid-1-columns" className="btn-layout">
          <svg width="16" height="10">
            <rect x="0" y="0" width="4" height="4" />
            <rect x="6" y="0" width="10" height="4" />
            <rect x="0" y="6" width="4" height="4" />
            <rect x="6" y="6" width="10" height="4" />
          </svg>
        </NavLink>

        <NavLink to="/shop/grid-2-columns" className="btn-layout">
          <svg width="10" height="10">
            <rect x="0" y="0" width="4" height="4" />
            <rect x="6" y="0" width="4" height="4" />
            <rect x="0" y="6" width="4" height="4" />
            <rect x="6" y="6" width="4" height="4" />
          </svg>
        </NavLink>

        <NavLink to="/shop/grid-3-columns" className="btn-layout">
          <svg width="16" height="10">
            <rect x="0" y="0" width="4" height="4" />
            <rect x="6" y="0" width="4" height="4" />
            <rect x="12" y="0" width="4" height="4" />
            <rect x="0" y="6" width="4" height="4" />
            <rect x="6" y="6" width="4" height="4" />
            <rect x="12" y="6" width="4" height="4" />
          </svg>
        </NavLink>

        <NavLink to="/shop/grid-4-columns" className="btn-layout">
          <svg width="22" height="10">
            <rect x="0" y="0" width="4" height="4" />
            <rect x="6" y="0" width="4" height="4" />
            <rect x="12" y="0" width="4" height="4" />
            <rect x="18" y="0" width="4" height="4" />
            <rect x="0" y="6" width="4" height="4" />
            <rect x="6" y="6" width="4" height="4" />
            <rect x="12" y="6" width="4" height="4" />
            <rect x="18" y="6" width="4" height="4" />
          </svg>
        </NavLink>
      </div>
    </div>
  );
}

export default ToolboxRight;

import React from "react";
import { Link } from "react-router-dom";

function Breadcrumb(props) {
  return (
    <nav aria-label="breadcrumb" className="breadcrumb-nav mb-2">
      <div className="container">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li className={`breadcrumb-item ${props.breadcrumb.active1}`}>
            <Link to="/shop/grid-3-columns">{props.breadcrumb.item1}</Link>
          </li>
          <li
            className={`breadcrumb-item ${props.breadcrumb.active2}`}
            aria-current="page"
          >
            {props.breadcrumb.item2}
          </li>
        </ol>
      </div>
    </nav>
  );
}

export default Breadcrumb;

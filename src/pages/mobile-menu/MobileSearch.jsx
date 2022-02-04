import React from "react";

function MobileSearch() {
  return (
    <form action="/#" method="get" className="mobile-search">
      <label for="mobile-search" className="sr-only">
        Search
      </label>
      <input
        type="search"
        className="form-control"
        name="mobile-search"
        id="mobile-search"
        placeholder="Search in..."
        required
      />
      <button className="btn btn-primary" type="submit">
        <i className="icon-search"></i>
      </button>
    </form>
  );
}

export default MobileSearch;

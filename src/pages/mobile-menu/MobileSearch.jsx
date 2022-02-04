import React from "react";

function MobileSearch() {
  return (
    <form action="/#" method="get" class="mobile-search">
      <label for="mobile-search" class="sr-only">
        Search
      </label>
      <input
        type="search"
        class="form-control"
        name="mobile-search"
        id="mobile-search"
        placeholder="Search in..."
        required
      />
      <button class="btn btn-primary" type="submit">
        <i class="icon-search"></i>
      </button>
    </form>
  );
}

export default MobileSearch;

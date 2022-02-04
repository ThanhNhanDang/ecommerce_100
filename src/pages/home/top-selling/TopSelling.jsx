import React from "react";
import TopSellingContent from "./content/TopSellingContent";
import TopSellingHead from "./TopSellingHead";

function TopSelling() {
  return (
    <div className="container top">
      <TopSellingHead />
      <TopSellingContent />
    </div>
  );
}

export default TopSelling;

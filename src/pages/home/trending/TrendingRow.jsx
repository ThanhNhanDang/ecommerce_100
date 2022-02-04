import React from "react";
import TrendingContent from "./content/TrendingContent";
import TrendingBanner from "./TrendingBanner";

function TrendingRow() {
  return (
    <div className="row">
      <TrendingBanner />
      <TrendingContent />
    </div>
  );
}

export default TrendingRow;

import React from "react";
import TrendingHead from "./TrendingHead";
import TrendingRow from "./TrendingRow";

function Trending() {
  return (
    <div className="container trending">
      <TrendingHead />
      <TrendingRow/>
    </div>
  );
}

export default Trending;

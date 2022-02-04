import React from "react";
import Footer from "./Footer";
import Header from "./header/Header";
import Main from "./Main";

function PageWrapper() {
  return (
    <div className="page-wrapper">
      <Header />
      <Main />
      <Footer />
    </div>
    
  );
}

export default PageWrapper;

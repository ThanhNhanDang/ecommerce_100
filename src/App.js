import React from "react";

import PageWrapper from "./components/page-wrapper/PageWrapper";
import ScrollTopMobileMenuOverlay from "./components/ScrollTopMobileMenuOverlay";
import useScript from "./hooks/useScript";
import LoginRegister from "./pages/login-register/LoginRegister";
import MobileMenu from "./pages/mobile-menu/MobileMenu";
import Newsletter from "./pages/Newsletter";
function App() {
  useScript("./assets/js/jquery.min.js");
  useScript("./assets/js/main.js");

  useScript("./assets/js/jquery.elevateZoom.min.js");
  return (
    <>
      <PageWrapper />
      <ScrollTopMobileMenuOverlay />
      <MobileMenu />
      <LoginRegister />
      <Newsletter />
      
    </>
  );
}

export default App;

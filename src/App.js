import React from "react";

import PageWrapper from "./components/page-wrapper/PageWrapper";
import ScrollTopMobileMenuOverlay from "./components/ScrollTopMobileMenuOverlay";
import LoginRegister from "./pages/login-register/LoginRegister";
import MobileMenu from "./pages/mobile-menu/MobileMenu";
import Newsletter from "./pages/Newsletter";

function App() {
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

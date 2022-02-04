import React from "react";

function ScrollTopMobileMenuOverlay() {
  return (
    <>
      <button id="scroll-top" title="Back to Top">
        <i className="icon-arrow-up"></i>
      </button>

      <div className="mobile-menu-overlay"></div>
    </>
  );
}

export default ScrollTopMobileMenuOverlay;

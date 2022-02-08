import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-middle">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-lg-3">
              <div className="widget widget-about">
                <img
                  src="/assets/images/demos/demo-3/logo-footer.png"
                  className="footer-logo"
                  alt="Footer Logo"
                  width="105"
                  height="25"
                />
                <p>
                  Praesent dapibus, neque id cursus ucibus, tortor neque egestas
                  augue, eu vulputate magna eros eu erat.
                </p>
                <div class="social-icons">
                  <a
                    href="/#"
                    class="social-icon"
                    target="_blank"
                    title="Facebook"
                  >
                    <i class="icon-facebook-f"></i>
                  </a>
                  <a
                    href="/#"
                    class="social-icon"
                    target="_blank"
                    title="Twitter"
                  >
                    <i class="icon-twitter"></i>
                  </a>
                  <a
                    href="/#"
                    class="social-icon"
                    target="_blank"
                    title="Instagram"
                  >
                    <i class="icon-instagram"></i>
                  </a>
                  <a
                    href="/#"
                    class="social-icon"
                    target="_blank"
                    title="Youtube"
                  >
                    <i class="icon-youtube"></i>
                  </a>
                  <a
                    href="/#"
                    class="social-icon"
                    target="_blank"
                    title="Pinterest"
                  >
                    <i class="icon-pinterest"></i>
                  </a>
                </div>
                <div className="widget-call">
                  <i className="icon-phone"></i>
                  Got Question? Call us 24/7
                  <a href="tel:#">+0123 456 789</a>
                </div>

                {/* End .widget-call */}
              </div>
              {/* End .widget about-widget */}
            </div>
            {/* End .col-sm-6 col-lg-3 */}

            <div className="col-sm-6 col-lg-3">
              <div className="widget">
                <h4 className="widget-title">Useful Links</h4>
                {/* End .widget-title */}

                <ul className="widget-list">
                  <li>
                    <Link to="/about-us">About Molla</Link>
                  </li>
                  <li>
                    <a href="/#">Our Services</a>
                  </li>
                  <li>
                    <a href="/#">How to shop on Molla</a>
                  </li>
                  <li>
                    <a href="faq.html">FAQ</a>
                  </li>
                  <li>
                    <Link to="/contact-us">Contact us</Link>
                  </li>
                </ul>
                {/* End .widget-list */}
              </div>
              {/* End .widget */}
            </div>
            {/* End .col-sm-6 col-lg-3 */}

            <div className="col-sm-6 col-lg-3">
              <div className="widget">
                <h4 className="widget-title">Customer Service</h4>
                {/* End .widget-title */}

                <ul className="widget-list">
                  <li>
                    <a href="/#">Payment Methods</a>
                  </li>
                  <li>
                    <a href="/#">Money-back guarantee!</a>
                  </li>
                  <li>
                    <a href="/#">Returns</a>
                  </li>
                  <li>
                    <a href="/#">Shipping</a>
                  </li>
                  <li>
                    <a href="/#">Terms and conditions</a>
                  </li>
                  <li>
                    <a href="/#">Privacy Policy</a>
                  </li>
                </ul>
                {/* End .widget-list */}
              </div>
              {/* End .widget */}
            </div>
            {/* End .col-sm-6 col-lg-3 */}

            <div className="col-sm-6 col-lg-3">
              <div className="widget">
                <h4 className="widget-title">My Account</h4>
                {/* End .widget-title */}

                <ul className="widget-list">
                  <li>
                    <a href="#signin-modal" data-toggle="modal">Sign In</a>
                  </li>
                  <li>
                    <Link to="/my-cart">View Cart</Link>
                  </li>
                  <li>
                    <Link to="/wishlist">My Wishlist</Link>
                  </li>
                  <li>
                    <a href="/#">Track My Order</a>
                  </li>
                  <li>
                    <a href="/#">Help</a>
                  </li>
                </ul>
                {/* End .widget-list */}
              </div>
              {/* End .widget */}
            </div>
            {/* End .col-sm-6 col-lg-3 */}
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </div>
      {/* End .footer-middle */}

      <div className="footer-bottom">
        <div className="container">
          <p className="footer-copyright">
            Copyright © 2019 Molla Store. All Rights Reserved.
          </p>
          {/* End .footer-copyright */}
          <figure className="footer-payments">
            <img
              src="/assets/images/payments.png"
              alt="Payment methods"
              width="272"
              height="20"
            />
          </figure>
          {/* End .footer-payments */}
        </div>
        {/* End .container */}
      </div>
      {/* End .footer-bottom */}
    </footer>
  );
}

export default Footer;

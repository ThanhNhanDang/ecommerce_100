import React from "react";
import LoginFacebookOrGoogle from "./LoginFacebookOrGoogle";

function Register() {
  return (
    <div
      className="tab-pane fade"
      id="register"
      role="tabpanel"
      aria-labelledby="register-tab"
    >
      <form action="/#">
        <div className="form-group">
          <label for="register-email">Your email address *</label>
          <input
            type="email"
            className="form-control"
            id="register-email"
            name="register-email"
            required
          />
        </div>
        {/* End .form-group */}

        <div className="form-group">
          <label for="register-password">Password *</label>
          <input
            type="password"
            className="form-control"
            id="register-password"
            name="register-password"
            required
          />
        </div>
        {/* End .form-group */}

        <div className="form-footer">
          <button type="submit" className="btn btn-outline-primary-2">
            <span>SIGN UP</span>
            <i className="icon-long-arrow-right"></i>
          </button>

          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="register-policy"
              required
            />
            <label className="custom-control-label" for="register-policy">
              I agree to the
              <a href="/#">privacy policy</a> *
            </label>
          </div>
          {/* End .custom-checkbox */}
        </div>
        {/* End .form-footer */}
      </form>
      <LoginFacebookOrGoogle />
    </div>
  );
}

export default Register;

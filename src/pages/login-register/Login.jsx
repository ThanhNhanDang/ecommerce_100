import React from "react";
import LoginFacebookOrGoogle from "./LoginFacebookOrGoogle";

function Login() {
  return (
    <div
      className="tab-pane fade show active"
      id="signin"
      role="tabpanel"
      aria-labelledby="signin-tab"
    >
      <form action="/#">
        <div className="form-group">
          <label for="singin-email">Username or email address *</label>
          <input
            type="text"
            className="form-control"
            id="singin-email"
            name="singin-email"
            required
          />
        </div>
        {/* End .form-group */}

        <div className="form-group">
          <label for="singin-password">Password *</label>
          <input
            type="password"
            className="form-control"
            id="singin-password"
            name="singin-password"
            required
          />
        </div>
        {/* End .form-group */}

        <div className="form-footer">
          <button type="submit" className="btn btn-outline-primary-2">
            <span>LOG IN</span>
            <i className="icon-long-arrow-right"></i>
          </button>

          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="signin-remember"
            />
            <label className="custom-control-label" for="signin-remember">
              Remember Me
            </label>
          </div>
          {/* End .custom-checkbox */}

          <a href="/#" className="forgot-link">
            Forgot Your Password?
          </a>
        </div>
        {/* End .form-footer */}
      </form>
      <LoginFacebookOrGoogle/>
      {/* End .form-choice */}
    </div>
  );
}

export default Login;

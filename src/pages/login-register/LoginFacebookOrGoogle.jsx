import React from "react";

function LoginFacebookOrGoogle() {
  return (
    <div className="form-choice">
      <p className="text-center">or sign in with</p>
      <div className="row">
        <div className="col-sm-6">
          <a href="/#" className="btn btn-login btn-g">
            <i className="icon-google"></i>
            Login With Google
          </a>
        </div>
        {/* End .col-6 */}
        <div className="col-sm-6">
          <a href="/#" className="btn btn-login btn-f">
            <i className="icon-facebook-f"></i>
            Login With Facebook
          </a>
        </div>
        {/* End .col-6 */}
      </div>
      {/* End .row */}
    </div>
  );
}

export default LoginFacebookOrGoogle;

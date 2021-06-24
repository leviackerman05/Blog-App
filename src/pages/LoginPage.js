import React from "react";
import "./LoginPage.css";

const LoginPage = () => {
  return (
    <div className="login">
      <div className="login-image">
        <img src="/Images/loginImage.jpg" width="100%" />
      </div>
      <div className="outer-login-form">
        <div className="login-form">
          <div>
            <h1>Login </h1>
            <h5 className="text-below-login">Please enter your credentials.</h5>
          </div>
          <div className="form-control">
            <input
              className="form-input"
              type="text"
              name="login"
              placeholder="UserName"
              required
            />
            <input
              className="form-input"
              type="password"
              name="password"
              placeholder="Password"
              required
            />
            <button className="submit-button">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

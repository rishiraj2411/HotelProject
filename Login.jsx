import React from "react";
import { NavLink } from "react-router-dom";
import "./login.css"

export default function Login() {
  return (
    <div className="logincontainer ">
      <div class="card">
        <form id="loginForm">
          <h2 class="title">Log in</h2>
          <div class="email-login">
            Email
            <input
              type="text"
              placeholder="Enter Email"
              name="uname"
              id="email"
            />
            <span id="emailError" class="error"></span>
            Password
            <input
              type="password"
              placeholder="Enter Password"
              name="psw"
              id="password"
            />
            <span id="passwordError" class="error"></span>
          </div>
          <button type="button" class="btn" onclick="validateForm()">
            Log In
          </button>
          <a class="forget-pass" href="#forgetpass">
            Forgot password?
          </a>
          <p class="subtitle">
            Don't have an account? <NavLink to="/register"> sign Up</NavLink>
          </p>
          <div class="homelink">
            <p>
              <NavLink to="/">Home</NavLink>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

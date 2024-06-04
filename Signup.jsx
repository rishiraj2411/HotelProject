import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Signup.css"

export default function Signup() {
  return (
    <div>
      <body className='bodybg'>
    <div class="regcard">
      <form name="signupForm" onsubmit="return validateForm()">
        <h2 class="title">Sign Up</h2>
        <div class="email-signup">
          Name
          <input type="text" placeholder="Enter Name" name="name" />
          Email
          <input type="text" placeholder="Enter Email" name="email" />
          Password
          <input type="password" placeholder="Enter Password" name="psw" />
          Confirm Password
          <input
            type="password"
            placeholder="Confirm Password"
            name="confirm_psw"
          />
        </div>
        <button type="submit" class="btn">Sign Up</button>
        <p class="subtitle">
          Already have an account? <NavLink to="/login">Log In</NavLink>
        </p>
      </form>
    </div>
  </body>
    </div>
  )
}

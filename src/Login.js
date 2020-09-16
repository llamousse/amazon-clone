import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();

    // firebase login stuff here
  };

  const register = (e) => {
    e.preventDefault();

    // firebase register here
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="loginLogo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
        />
      </Link>

      <div className="loginContainer">
        <h1>Sign In</h1>

        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit" onClick={signIn} className="loginSignInButton">
            Sign In
          </button>
        </form>

        <p>
          By continuing, you agree to Amazon Clone's Conditions of Use and
          Privacy Notice.
        </p>

        <button onClick={register} className="loginRegisterButton">
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;

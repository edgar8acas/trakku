import React, { SyntheticEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Button } from "../components/Controls/Button";
import { loginUser, selectAuth } from "../slices/auth";

function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
    stayLoggedIn: "false",
  });

  const history = useHistory();
  const dispatch = useDispatch();
  const { error } = useSelector(selectAuth);
  function handleSubmit(event: SyntheticEvent) {
    event.preventDefault();
    dispatch(loginUser(user));
  }

  // TODO: type the event
  function handleChange(event: any) {
    event.persist();
    const { name, checked, value } = event.target;
    const newValue = name === "stayLoggedIn" ? checked : value;
    setUser((old) => ({ ...old, [name]: newValue }));
  }

  return (
    <div className="Login">
      <div className="Login-wrapper center-form">
        <header>
          <h1>Sign in to We Track</h1>
          {error}
        </header>
        <form className="Login-form" onSubmit={handleSubmit}>
          <div className="control">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={user.email}
              onChange={handleChange}
            />
          </div>
          <div className="control">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={user.password}
              onChange={handleChange}
            />
          </div>
          <div className="Login-form__actions">
            <div className="control">
              <input
                type="checkbox"
                id="stay-logged-in"
                name="stayLoggedIn"
                value={String(user.stayLoggedIn)}
                onChange={handleChange}
              />
              <label htmlFor="stay-logged-in">Remember me</label>
            </div>
            <Button type="submit" label="Sign in" primary />
          </div>
        </form>
        <div className="Login__register-actions">
          <p>Don't have an account?</p>

          <Button label="Sign up" onClick={() => history.replace("/signup")} />
        </div>
      </div>
    </div>
  );
}

export default Login;

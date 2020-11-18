import React, { SyntheticEvent, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { useAuth } from "../hooks/use-auth";

function Register() {
  const [user, setUser] = useState({
    email: "",
    password: "",
    name: "",
    lastname: "",
  });

  const history = useHistory();
  const auth = useAuth();
  const location = useLocation<LocationState>();

  function handleChange(event: any) {
    const { name, value } = event.target;
    setUser((previousUser) => ({ ...previousUser, [name]: value }));
  }
  function handleSubmit(event: SyntheticEvent) {
    event.preventDefault();
    const { from } = location.state || { from: { pathname: "/dashboard" } };
    auth?.signUp(user).then(() => {
      history.replace(from.pathname);
    });
  }

  return (
    <div className="Register">
      <div className="Register-wrapper center-form">
        <header>
          <h1>Sign up to We Track</h1>
        </header>
        <form className="Register-form" onSubmit={handleSubmit}>
          <div className="control">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={user.name}
              onChange={handleChange}
            />
          </div>
          <div className="control">
            <label htmlFor="lastname">Lastname</label>
            <input
              type="text"
              id="lastname"
              name="lastname"
              value={user.lastname}
              onChange={handleChange}
            />
          </div>
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
          <div className="Register-form__actions">
            <button className="button" type="submit">
              Sign up
            </button>
          </div>
        </form>
        <div className="Register__go-to-signin">
          <p>
            Already have an account?
            <button className="link" onClick={() => history.replace("/signin")}>
              Sign in
            </button>
            .
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;

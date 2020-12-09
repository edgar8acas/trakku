import React, { SyntheticEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { Button } from "../components/Controls/Button";
import { signUpUser } from "../slices/auth";

function Register() {
  const [user, setUser] = useState({
    email: "",
    password: "",
    name: "",
    lastname: "",
  });

  const dispatch = useDispatch();
  const history = useHistory();
  function handleChange(event: any) {
    const { name, value } = event.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  }
  function handleSubmit(event: SyntheticEvent) {
    event.preventDefault();
    dispatch(signUpUser(user));
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
            <Button type="submit" label="Sign up" primary />
          </div>
        </form>
        <div className="Register__go-to-signin">
          <p>
            Already have an account?
            <Button
              label="Sign in"
              isLink
              onClick={() => history.replace("/signin")}
            />
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;

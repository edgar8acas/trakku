import { Field, Form, Formik, FormikValues } from "formik";
import React from "react";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Button } from "../components/Controls/Button";
import { Input } from "../components/Controls/Input";
import { loginUser, selectAuth } from "../slices/auth";

function Login() {
  const initialValues = {
    email: "",
    password: "",
  };

  const history = useHistory();
  const dispatch = useDispatch();
  const { error } = useSelector(selectAuth);

  function handleSubmit(user: FormikValues) {
    dispatch(loginUser(user));
  }

  return (
    <div className="Login">
      <div className="Login-wrapper center-form">
        <header>
          <h1>Sign in to We Track</h1>
          {error}
        </header>
        <Formik
          initialValues={initialValues}
          validationSchema={Yup.object({
            email: Yup.string().email("Invalid email").required("Required."),
            password: Yup.string().required("Required."),
          })}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting, errors }) => (
            <Form className="Login-form">
              <Field
                type="email"
                id="email"
                name="email"
                label="Email"
                component={Input}
              />

              <Field
                type="password"
                id="password"
                name="password"
                label="Password"
                component={Input}
              />

              <div className="Login-form__actions">
                <Button
                  type="submit"
                  label="Sign in"
                  primary
                  disabled={isSubmitting || Object.entries(errors).length > 0}
                />
              </div>
            </Form>
          )}
        </Formik>
        <div className="Login--register-actions">
          <span>Don't have an account?</span>
          <Button label="Sign up" onClick={() => history.replace("/signup")} />
        </div>
      </div>
    </div>
  );
}

export default Login;

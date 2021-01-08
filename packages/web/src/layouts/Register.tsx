import { Field, Form, Formik, FormikValues } from "formik";
import React from "react";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { Button } from "../components/Controls/Button";
import { Input } from "../components/Controls/Input";
import { signUpUser } from "../slices/auth";
import HomeLogo from "../assets/HomeLogo";

function Register() {
  const initialValues = {
    email: "",
    password: "",
    name: "",
    lastname: "",
  };

  const dispatch = useDispatch();
  const history = useHistory();

  function handleSubmit(values: FormikValues) {
    dispatch(signUpUser(values));
  }

  return (
    <div className="Register">
      <div className="Register-wrapper center-form">
        <header>
          <HomeLogo onClick={() => history.push("/")} className="Logo" />
          <h2>Sign up</h2>
        </header>

        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={Yup.object({
            name: Yup.string().required("Required."),
            lastname: Yup.string().required("Required."),
            email: Yup.string().email("Invalid email").required("Required."),
            password: Yup.string().required("Required."),
          })}
        >
          {({ isSubmitting, errors }) => (
            <Form className="Register-form form">
              <Field
                type="text"
                id="name"
                name="name"
                label="Name"
                component={Input}
              />

              <Field
                type="text"
                id="lastname"
                name="lastname"
                label="Last name"
                component={Input}
              />

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

              <div className="Register-form__actions">
                <Button
                  type="submit"
                  label="Sign up"
                  size="large"
                  primary
                  disabled={
                    isSubmitting || Boolean(Object.entries(errors).length > 0)
                  }
                />
              </div>
            </Form>
          )}
        </Formik>
        <div className="Register__go-to-signin">
          <p>
            Already have an account?
            <Button
              label="Sign in"
              isLink
              type="button"
              onClick={() => history.replace("/signin")}
            />
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;

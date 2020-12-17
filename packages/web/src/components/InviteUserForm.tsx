import { Field, Form, Formik } from "formik";

import React from "react";
import { useParams } from "react-router-dom";
import { ParamTypes } from "../typings";
import request from "../utilities/request";

const InviteUserForm: React.FC = ({ children }) => {
  const { id } = useParams<ParamTypes>();
  return (
    <div>
      <h1>alala</h1>
      <Formik
        initialValues={{ emails: "" }}
        onSubmit={async (values) => {
          await request(`api/projects/${id}/users`, {
            method: "POST",
            body: values,
          });
        }}
      >
        <Form>
          <label htmlFor="emails">Email</label>
          <Field
            id="emails"
            name="emails"
            placeholder="Enter email to invite"
          ></Field>
          <button type="submit">Invite</button>
        </Form>
      </Formik>
    </div>
  );
};

export default InviteUserForm;

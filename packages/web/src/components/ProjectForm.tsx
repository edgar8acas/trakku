import { Field, Form, Formik } from "formik";
import React from "react";
import request from "../utilities/request";
import * as Yup from "yup";
import Input from "./Controls/Input";

function ProjectForm() {
  return (
    <div>
      <h2>Create project</h2>
      <Formik
        initialValues={{ name: "" }}
        onSubmit={async (values) => {
          await request("api/projects", {
            method: "POST",
            body: values,
          });
          // TODO: Handle errors when creating form
        }}
        validationSchema={Yup.object({
          name: Yup.string().required("A project must have a name"),
        })}
      >
        {({ isSubmitting, errors }) => (
          <Form>
            <Field
              type="text"
              name="name"
              label="Name"
              placeholder="Project name"
              component={Input}
            />

            <button
              type="submit"
              disabled={isSubmitting || Boolean(errors.name)}
              className="button"
            >
              Create
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default ProjectForm;

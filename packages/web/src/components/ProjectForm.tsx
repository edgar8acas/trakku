import { Formik } from "formik";
import React from "react";
import request from "../utilities/request";
import * as Yup from "yup";
function ProjectForm() {
  return (
    <div>
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
          name: Yup.string().required("Required from yup"),
        })}
      >
        {({
          values,
          handleSubmit,
          handleChange,
          handleBlur,
          isSubmitting,
          errors,
          touched,
        }) => (
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
            />
            {touched.name && errors.name ? (
              <div style={{ color: "red" }}>{errors.name}</div>
            ) : null}
            <button
              type="submit"
              disabled={isSubmitting || Boolean(errors.name)}
              className="button"
            >
              Create
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
}

export default ProjectForm;

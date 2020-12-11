import { Field, Form, Formik } from "formik";
import React from "react";
import request from "../utilities/request";
import * as Yup from "yup";
import { Input } from "./Controls/Input";
import { Button } from "./Controls/Button";

export interface ProjectFormProps {
  onCancel?(): void;
}

export const ProjectForm: React.FC<ProjectFormProps> = ({ onCancel }) => {
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
          name: Yup.string().required("Required."),
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
            {onCancel && (
              <Button type="button" label="Cancel" onClick={onCancel}></Button>
            )}
            <Button
              type="submit"
              primary
              disabled={isSubmitting || Boolean(errors.name)}
              label="Create"
            />
          </Form>
        )}
      </Formik>
    </div>
  );
};

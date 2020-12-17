import { Field, Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import { Input } from "./Controls/Input";
import { Button } from "./Controls/Button";
import request from "../utilities/request";
import { useHistory } from "react-router-dom";
import { Alert } from "./Alert";

export interface ProjectFormProps {
  onCancel?(): void;
  showCancel?: boolean;
}

export const ProjectForm: React.FC<ProjectFormProps> = ({
  onCancel,
  showCancel = false,
}) => {
  const history = useHistory();

  function goToProjectDetails(projectId: string) {
    history.push(`projects/${projectId}`);
  }

  return (
    <div>
      <Formik
        initialValues={{ name: "" }}
        onSubmit={async (values, { setStatus }) => {
          try {
            const {
              data: {
                project: { id },
              },
            } = await request("api/projects", {
              method: "POST",
              body: values,
            });
            goToProjectDetails(id);
            if (onCancel) onCancel();
          } catch (error) {
            setStatus(error);
          }
        }}
        validationSchema={Yup.object({
          name: Yup.string().required("Required."),
        })}
      >
        {({ isSubmitting, errors, status }) => (
          <Form>
            <Field
              type="text"
              name="name"
              label="Name"
              placeholder="Project name"
              component={Input}
            />
            {showCancel && (
              <Button type="button" label="Cancel" onClick={onCancel}></Button>
            )}
            <Button
              type="submit"
              primary
              disabled={isSubmitting || Boolean(errors.name)}
              label="Create"
            />
            {status && (
              <Alert type="error" message={"Oops! Server error."}></Alert>
            )}
          </Form>
        )}
      </Formik>
    </div>
  );
};

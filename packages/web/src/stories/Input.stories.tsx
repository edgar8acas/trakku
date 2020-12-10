import * as React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import { InputProps, Input } from "../components/Controls/Input";
import { Field, FieldProps, Form, Formik } from "formik";

export default {
  title: "Input",
  component: Input,
} as Meta;

const Template: Story<FieldProps<any> & InputProps> = (args) => (
  <Formik initialValues={{ name: "" }} onSubmit={() => {}}>
    {() => (
      <Form>
        <Field type="text" name="name" label="Name" component={Input}></Field>
      </Form>
    )}
  </Formik>
);

export const Empty = Template.bind({});
Empty.args = {};

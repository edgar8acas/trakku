import { FieldProps } from "formik";
import * as React from "react";

export interface InputProps {
  label?: string;
}

export const Input: React.FC<FieldProps<any> & InputProps> = ({
  field,
  form: { touched, errors },
  label,
  ...props
}) => {
  return (
    <div className="control">
      <label>{label}</label>
      <input {...field} {...props} />
      {touched[field.name] && errors[field.name] ? (
        <div className="error" role="alert">
          {errors[field.name]}
        </div>
      ) : null}
    </div>
  );
};

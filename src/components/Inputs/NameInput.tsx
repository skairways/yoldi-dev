import { FC } from "react";
import { FieldProps, getIn } from "formik";

import { SystemTextInput } from "@components/Inputs/TextInput";
import { ReactComponent as UserIcon } from "@assets/icons/user.svg";

export const NameInput: FC<FieldProps> = ({ field, form, ...props }) => {
  const touched = getIn(form.touched, field.name);
  const errorMsg = getIn(form.errors, field.name);

  return (
    <SystemTextInput
      placeholder="Имя"
      startIcon={<UserIcon />}
      touched={touched}
      errorMsg={errorMsg}
      {...props}
      {...field}
    />
  );
};

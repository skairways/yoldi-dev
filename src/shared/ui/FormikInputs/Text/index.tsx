import { FieldProps, getIn } from "formik"
import React, { FC } from "react"

import { SystemTextInput } from "@/shared/ui/Inputs/Text"

export const FormikInput: FC<FieldProps> = ({ form, field, ...props }) => {
  const touched = getIn(form.touched, field.name)
  const errorMsg = getIn(form.errors, field.name)

  return (
    <SystemTextInput
      touched={touched}
      errorMsg={errorMsg}
      {...props}
      {...field}
    />
  )
}

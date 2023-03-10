import { FC } from "react"
import { FieldProps, getIn } from "formik"

import { SystemTextInput } from "@/components/Inputs/TextInput"
import { ReactComponent as MailIcon } from "@/assets/icons/mail.svg"

export const EmailInput: FC<FieldProps> = ({ field, form, ...props }) => {
  const touched = getIn(form.touched, field.name)
  const errorMsg = getIn(form.errors, field.name)

  return (
    <SystemTextInput
      placeholder="E-mail"
      startIcon={<MailIcon />}
      touched={touched}
      errorMsg={errorMsg}
      {...field}
      {...props}
    />
  )
}

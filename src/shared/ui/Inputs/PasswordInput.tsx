import { SystemTextInput } from "@/shared/ui/Inputs/TextInput"
import { ReactComponent as LockIcon } from "@/assets/icons/lock.svg"
import { FC } from "react"
import { FieldProps, getIn } from "formik"

export const PasswordInput: FC<FieldProps> = ({ field, form, ...props }) => {
  const touched = getIn(form.touched, field.name)
  const errorMsg = getIn(form.errors, field.name)

  return (
    <SystemTextInput
      type="password"
      placeholder="Пароль"
      startIcon={<LockIcon />}
      touched={touched}
      errorMsg={errorMsg}
      {...field}
      {...props}
    />
  )
}

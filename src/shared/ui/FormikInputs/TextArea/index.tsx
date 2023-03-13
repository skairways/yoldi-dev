import { FieldProps } from "formik"
import { FC } from "react"

import { SystemTextArea } from "@/shared/ui/Inputs/TextArea"

export const FormikTextArea: FC<FieldProps> = ({ form, field, ...props }) => {
  return <SystemTextArea {...field} {...props} />
}

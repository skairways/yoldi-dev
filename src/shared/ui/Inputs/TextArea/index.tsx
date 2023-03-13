import { FieldProps } from "formik"
import { FC } from "react"
import cx from "classnames"

import styles from "./TextArea.module.scss"
import { ITextArea } from "./types"

export const TextArea: FC<FieldProps & ITextArea> = ({
  form,
  field,
  className,
  ...props
}) => {
  return (
    <textarea
      className={cx(styles.textarea, className)}
      {...props}
      {...field}
    />
  )
}

import { FieldProps } from "formik"
import { FC } from "react"

import styles from "./TextArea.module.scss"

export const TextArea: FC<FieldProps> = ({ form, field, ...props }) => {
  return <textarea className={styles.textarea} {...props} {...field} />
}

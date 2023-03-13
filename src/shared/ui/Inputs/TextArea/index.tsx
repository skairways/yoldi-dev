import { FC } from "react"
import cx from "classnames"

import styles from "./TextArea.module.scss"
import { ITextArea } from "./types"

export const SystemTextArea: FC<ITextArea> = ({ className, ...props }) => {
  return <textarea className={cx(styles.textarea, className)} {...props} />
}

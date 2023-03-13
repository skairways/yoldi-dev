import { FC } from "react"

import { IText } from "./types"
import styles from "./Text.module.scss"
import cx from "classnames"

export const SystemText: FC<IText> = ({ children, className, type }) => {
  return <p className={cx(styles[type], className)}>{children}</p>
}

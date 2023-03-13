import cx from "classnames"
import { FC } from "react"
import { ITitle } from "./types"

import styles from "./Title.module.scss"

export const SystemTitle: FC<ITitle> = ({ children, className, type }) => {
  return <h2 className={cx(styles[type], className)}>{children}</h2>
}

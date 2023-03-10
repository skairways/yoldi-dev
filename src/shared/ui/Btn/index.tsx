import { FC, PropsWithChildren } from "react"
import cx from "classnames"

import { ISystemBtn } from "./types"
import styles from "./Btn.module.scss"

export const SystemBtn: FC<ISystemBtn & PropsWithChildren> = ({
  loading,
  loadingLabel,
  children,
  btnType,
  className,
}) => {
  return (
    <button className={cx(styles[`${btnType}`], className)}>
      {loading ? loadingLabel : children}
    </button>
  )
}

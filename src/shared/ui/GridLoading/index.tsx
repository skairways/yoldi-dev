import cx from "classnames"
import { FC } from "react"

import styles from "./GridLoading.module.scss"
import { IGridLoading } from "./types"

export const GridLoading: FC<IGridLoading> = ({ isFullPageHeight }) => {
  return (
    <div
      className={cx(styles.root, {
        [styles.pageHeight]: isFullPageHeight,
      })}
    >
      <div className={styles.ellipsis}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  )
}

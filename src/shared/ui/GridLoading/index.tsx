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
        <div className={styles.first}></div>
        <div className={styles.second}></div>
        <div className={styles.third}></div>
        <div className={styles.fourth}></div>
      </div>
    </div>
  )
}

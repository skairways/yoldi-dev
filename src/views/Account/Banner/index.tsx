import { FC } from "react"
import cx from "classnames"

import { IBanner } from "./types"
import styles from "./Banner.module.scss"

export const Banner: FC<IBanner> = ({ url, className }) => {
  return (
    <div
      className={cx(styles.root, className)}
      style={{ backgroundImage: `url(${url})` }}
    />
  )
}

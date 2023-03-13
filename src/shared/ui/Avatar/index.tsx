import { FC } from "react"

import { IAvatar } from "./types"
import styles from "./Avatar.module.scss"

export const Avatar: FC<IAvatar> = ({ name, url, size, ...props }) => {
  return (
    <div className={styles[size]} {...props}>
      {url ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={url} alt={name || "user-img"} className={styles.img} />
      ) : (
        name?.charAt(0)
      )}
    </div>
  )
}

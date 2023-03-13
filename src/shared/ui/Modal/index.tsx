import { FC, useEffect } from "react"

import styles from "./Modal.module.scss"
import { IModal } from "./types"

export const Modal: FC<IModal> = ({ closeFn, children }) => {
  useEffect(() => {
    document.body.style.overflowY = "hidden"

    return () => {
      document.body.style.overflowY = "auto"
    }
  }, [])

  return (
    <div className={styles.root}>
      <div className={styles.content}>{children}</div>
      <div className={styles.overlay} onClick={closeFn} />
    </div>
  )
}

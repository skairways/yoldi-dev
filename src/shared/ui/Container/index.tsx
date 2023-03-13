import { FC, PropsWithChildren } from "react"

import styles from "./Container.module.scss"

export const SystemContainer: FC<PropsWithChildren> = ({ children }) => {
  return <div className={styles.root}>{children}</div>
}

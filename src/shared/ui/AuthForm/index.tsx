import { FC } from "react"

import { SystemTitle } from "@/shared/ui/Title"
import styles from "./AuthForm.module.scss"
import { IAuthFormTemplate } from "./types"

export const AuthFormTemplate: FC<IAuthFormTemplate> = ({
  title,
  children,
}) => {
  return (
    <div className={styles.root}>
      <div className={styles.wrapper}>
        <SystemTitle type="reg">{title}</SystemTitle>
        {children}
      </div>
    </div>
  )
}

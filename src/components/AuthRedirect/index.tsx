import { FC } from "react"
import Link from "next/link"

import { SystemText } from "@/shared/ui/Text"
import { IAuthRedirect } from "./types"
import styles from "./AuthRedirect.module.scss"

export const AuthRedirectHelper: FC<IAuthRedirect> = ({
  text,
  link,
  linkText,
}) => {
  return (
    <div className={styles.root}>
      <SystemText type="reg" className={styles.text}>
        {text}
      </SystemText>
      <SystemText type="reg" className={styles.text}>
        {link && (
          <Link href={link} className={styles.link}>
            {linkText}
          </Link>
        )}
      </SystemText>
    </div>
  )
}

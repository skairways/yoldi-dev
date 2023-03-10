import { FC } from "react"
import cx from "classnames"

import { UserModel } from "@/types/user"
import { Avatar } from "@/components/Avatar"
import styles from "./UserAccount.module.scss"
import { SystemText } from "@/shared/ui/Text"

export const UserAccount: FC<UserModel> = ({ name, email, image }) => {
  return (
    <li className={styles.root}>
      <Avatar name={name} url={image?.url} size="small" />
      <div className={styles.inner}>
        <SystemText className={cx(styles.name, "textNormalizer")} type="reg">
          {name}
        </SystemText>
        <SystemText className={cx(styles.email, "textNormalizer")} type="reg">
          {email}
        </SystemText>
      </div>
    </li>
  )
}

import { FC } from "react"
import cx from "classnames"

import { UserModel } from "@/shared/types/user"
import { Avatar } from "@/shared/ui/Avatar"
import styles from "./UserAccount.module.scss"
import { SystemText } from "@/shared/ui/Text"
import Link from "next/link"
import { AppPages } from "@/shared/routes/paths"

export const UserAccount: FC<UserModel> = ({ name, email, image, slug }) => {
  return (
    <li>
      <Link href={`${AppPages.Account}/${slug}`} className={styles.root}>
        <Avatar name={name} url={image?.url} size="small" />
        <div className={styles.inner}>
          <SystemText className={cx(styles.name, "textNormalizer")} type="reg">
            {name}
          </SystemText>
          <SystemText className={cx(styles.email, "textNormalizer")} type="reg">
            {email}
          </SystemText>
        </div>
      </Link>
    </li>
  )
}

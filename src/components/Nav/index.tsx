import { FC } from "react"
import Link from "next/link"
import useSWR, { SWRResponse } from "swr"

import { Logo } from "@/components/Logo"
import { SystemText } from "@/shared/ui/Text"
import { SystemBtn } from "@/shared/ui/Btn"
import { AccountPages, AppPages } from "@/routes/constant"
import { cookies } from "@/services/cookie"
import { CookieKeys } from "@/types/cookie"
import AxiosAPI from "@/services/api"
import { ApiRoutes } from "@/routes/api"
import { Avatar } from "../Avatar"
import { UserModel } from "@/types/user"
import styles from "./Nav.module.scss"

export const Nav: FC = () => {
  const loggedIn = cookies.get(CookieKeys.ACCESS_TOKEN)

  const { data: response }: SWRResponse = useSWR(
    () => (loggedIn ? ApiRoutes.Profile : null),
    AxiosAPI.get
  )
  const user: UserModel = response?.data

  return (
    <nav className={styles.nav}>
      <div className={styles.inner}>
        <Link href={AppPages.RootPage}>
          <div className={styles.logoWrapper}>
            <Logo />
            <SystemText type="reg" className={styles.text}>
              Разрабатываем и запускаем сложные веб проекты
            </SystemText>
          </div>
        </Link>

        {!user && (
          <Link href={AppPages.Login}>
            <SystemBtn btnType="secondary">Войти</SystemBtn>
          </Link>
        )}
        {user?.email && (
          <Link href={`${AccountPages.Profile}`} className={styles.link}>
            <SystemText type="reg">{user?.name}</SystemText>
            <Avatar name={user?.name} url={user?.image?.url} size="small" />
          </Link>
        )}
      </div>
    </nav>
  )
}

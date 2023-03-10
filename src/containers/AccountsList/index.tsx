import React, { FC } from "react"
import useSWR, { SWRResponse } from "swr"
import Link from "next/link"

import { Layer } from "@/components/Layer"
import { SystemTitle } from "@/shared/ui/Title"
import AxiosAPI from "@/services/api"
import { AppPages } from "@/routes/constant"
import { UserAccount } from "./UserAccount"
import { UserModel } from "@/types/user"
import { SystemContainer } from "@/shared/ui/Container"
import { ApiRoutes } from "@/routes/api"
import { GridLoading } from "@/shared/ui/GridLoading"
import styles from "./AccountList.module.scss"

export const AccountsListPage: FC = () => {
  const { data: response, isLoading }: SWRResponse = useSWR(
    ApiRoutes.User,
    AxiosAPI.get
  )
  const users: UserModel[] = response?.data

  return (
    <Layer className={styles.layer}>
      <SystemContainer>
        <div className={styles.wrapper}>
          <SystemTitle type="reg">Список аккаунтов</SystemTitle>
          {isLoading && <GridLoading />}
          {users && (
            <ul className={styles.list}>
              {users.map((user: UserModel) => (
                <Link
                  key={user?.slug}
                  href={`${AppPages.Account}/${user.slug}`}
                >
                  <UserAccount {...user} />
                </Link>
              ))}
            </ul>
          )}
        </div>
      </SystemContainer>
    </Layer>
  )
}

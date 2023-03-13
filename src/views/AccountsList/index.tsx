import React, { FC } from "react"
import useSWR, { SWRResponse } from "swr"

import { Layer } from "@/shared/ui/Layer"
import { SystemTitle } from "@/shared/ui/Title"
import AxiosAPI from "@/shared/services/api"
import { UserAccount } from "./UserAccount"
import { UserModel } from "@/shared/types/user"
import { SystemContainer } from "@/shared/ui/Container"
import { ApiRoutes } from "@/shared/routes/api"
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
                <UserAccount key={user?.slug} {...user} />
              ))}
            </ul>
          )}
        </div>
      </SystemContainer>
    </Layer>
  )
}

import { useRouter } from "next/router"
import useSWR, { SWRResponse } from "swr"
import cx from "classnames"

import AxiosAPI from "@/shared/services/api"
import { CookieKeys } from "@/shared/types/cookie"
import { cookies } from "@/shared/services/cookie"
import { AppPages } from "@/shared/routes/paths"
import { Avatar } from "@/shared/ui/Avatar"
import { SystemContainer } from "@/shared/ui/Container"
import { SystemText } from "@/shared/ui/Text"
import { ReactComponent as PenIcon } from "src/assets/icons/pen.svg"
import { ReactComponent as SignOutIcon } from "src/assets/icons/sign-out.svg"
import { Banner } from "./Banner"
import { ApiRoutes } from "@/shared/routes/api"
import { GridLoading } from "@/shared/ui/GridLoading"
import { useEffect, useState } from "react"
import { EditModal } from "./EditModal"
import { Layer } from "@/shared/ui/Layer"
import { SystemTitle } from "@/shared/ui/Title"
import { SystemBtn } from "@/shared/ui/Btn"
import styles from "./Account.module.scss"

export const AccountPage = () => {
  const router = useRouter()
  const [openModal, setOpenModal] = useState(false)
  const { slug } = router.query

  const profileRoute = slug === "profile"
  const getUser = !profileRoute && slug

  const { data: profileRes, isLoading }: SWRResponse = useSWR(
    () => (slug ? ApiRoutes.Profile : null),
    AxiosAPI.get
  )

  const { data: userRes }: SWRResponse = useSWR(
    () => (getUser ? `${ApiRoutes.User}/${slug}` : null),
    AxiosAPI.get
  )
  const profileSlug = profileRes?.data?.slug
  const userSlug = userRes?.data?.slug

  const owner = profileSlug === userSlug || profileRoute
  const user = profileRoute ? profileRes?.data : userRes?.data

  const logOut = () => {
    cookies.remove(CookieKeys.ACCESS_TOKEN)
    router.replace(AppPages.RootPage)
  }

  const openModalFn = () => {
    setOpenModal(true)
    router.push({
      pathname: `${AppPages.Account}/[slug]`,
      query: { slug: slug, modal: "open" },
    })
  }

  const closeModalFn = () => {
    setOpenModal(false)
    router.replace({
      pathname: `${AppPages.Account}/[slug]`,
      query: { slug: slug },
    })
  }

  useEffect(() => {
    if (router.query.modal) {
      setOpenModal(true)
    } else {
      setOpenModal(false)
    }
  }, [router])

  return (
    <>
      <Layer className={styles.layer}>
        <Banner url={user?.image?.url} />
        <SystemContainer>
          <div className={styles.wrapper}>
            <Avatar name={user?.name} url={user?.image?.url} size="large" />
            {isLoading && <GridLoading />}
            <div className={styles.info}>
              <div className={styles.infoInner}>
                <SystemTitle className={styles.name} type="reg">
                  {user?.name}
                </SystemTitle>

                <SystemText
                  className={cx(styles.email, "textNormalizer")}
                  type="reg" /* mt="10px" */
                >
                  {user?.email}
                </SystemText>
              </div>
              {owner && (
                <SystemBtn
                  className={styles.edit}
                  btnType="secondary"
                  onClick={openModalFn}
                >
                  <PenIcon />
                  Редактировать
                </SystemBtn>
              )}
            </div>
            {user?.description && (
              <div className={styles.descr}>
                <SystemText type="reg">{user?.description}</SystemText>
              </div>
            )}
            {owner && (
              <SystemBtn
                className={styles.logOut}
                btnType="secondary"
                onClick={logOut}
              >
                <SignOutIcon />
                Выйти
              </SystemBtn>
            )}
          </div>
        </SystemContainer>
      </Layer>

      {openModal && owner && <EditModal closeFn={closeModalFn} user={user} />}
    </>
  )
}

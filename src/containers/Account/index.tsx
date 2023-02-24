import { useRouter } from "next/router"
import useSWR, { SWRResponse } from "swr"

import AxiosAPI from "@/services/api"
import { CookieKeys } from "@/types/cookie"
import { cookies } from "@/services/cookie"
import { AppPages } from "@/routes/constant"
import { Avatar } from "@/components/Avatar"
import { SystemContainer } from "@/components/common/Container"
import { SystemText } from "@/components/common/Text"
import { ReactComponent as PenIcon } from "src/assets/icons/pen.svg"
import { ReactComponent as SignOutIcon } from "src/assets/icons/sign-out.svg"
import { Banner } from "./components/Banner"
import { ApiRoutes } from "@/routes/api"
import { GridLoading } from "@/components/common/GridLoading"
import { useEffect, useState } from "react"
import { EditModal } from "./components/EditModal"
import {
  Description,
  EditBtn,
  Email,
  LogOutBtn,
  Name,
  StyledLayer,
  UserInfo,
  UserInfoInner,
  Wrapper,
} from "./style"

export const AccountPage = () => {
  const router = useRouter()
  const [openModal, setOpenModal] = useState(false)
  const { slug } = router.query

  const owner = slug === "profile"

  const url = owner ? ApiRoutes.Profile : `${ApiRoutes.User}/${slug}`

  const { data: response, isLoading }: SWRResponse = useSWR(
    () => (slug ? url : null),
    AxiosAPI.get
  )
  const user = response?.data

  const logOut = () => {
    cookies.remove(CookieKeys.ACCESS_TOKEN)
    router.replace(AppPages.RootPage)
  }

  const openModalFn = () => {
    setOpenModal(true)
    router.push({
      pathname: `${AppPages.Account}/[slug]`,
      query: { slug: "profile", modal: "open" },
    })
  }

  const closeModalFn = () => {
    setOpenModal(false)
    router.replace({
      pathname: `${AppPages.Account}/[slug]`,
      query: { slug: "profile" },
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
      <StyledLayer>
        <Banner url={user?.image?.url} />
        <SystemContainer>
          <Wrapper>
            <Avatar name={user?.name} url={user?.image?.url} size="large" />
            {isLoading && <GridLoading />}
            <UserInfo>
              <UserInfoInner>
                <Name type="reg">{user?.name}</Name>

                <Email type="reg" mt="10px">
                  {user?.email}
                </Email>
              </UserInfoInner>
              {owner && (
                <EditBtn btnType="secondary" onClick={openModalFn}>
                  <PenIcon />
                  Редактировать
                </EditBtn>
              )}
            </UserInfo>
            {user?.description && (
              <Description>
                <SystemText type="reg">{user?.description}</SystemText>
              </Description>
            )}
            {owner && (
              <LogOutBtn btnType="secondary" onClick={logOut}>
                <SignOutIcon />
                Выйти
              </LogOutBtn>
            )}
          </Wrapper>
        </SystemContainer>
      </StyledLayer>

      {openModal && owner && <EditModal closeFn={closeModalFn} user={user} />}
    </>
  )
}

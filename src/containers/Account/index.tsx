import { useRouter } from "next/router"
import useSWR, { SWRResponse } from "swr"
import styled from "@emotion/styled"
import { css } from "@emotion/react"

import AxiosAPI from "@/services/api"
import { Layer } from "@/components/common/Layer"
import { CookieKeys } from "@/types/cookie"
import { cookies } from "@/services/cookie"
import { AppPages } from "@/routes/constant"
import { Avatar } from "@/components/Avatar"
import { SystemContainer } from "@/components/common/Container"
import { SystemBtn } from "@/components/common/Btn"
import { SystemText } from "@/components/common/Text"
import { ReactComponent as PenIcon } from "src/assets/icons/pen.svg"
import { ReactComponent as SignOutIcon } from "src/assets/icons/sign-out.svg"
import { Banner } from "./components/Banner"
import { media } from "@/styles/media"
import { ApiRoutes } from "@/routes/api"
import { GridLoading } from "@/components/common/GridLoading"
import { NameNormalizer } from "@/styles/common"
import { useEffect, useState } from "react"
import { EditModal } from "./components/EditModal"
import { SystemTitle } from "@/components/common/Title"

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
                <NameNormalizer type="reg">
                  <SystemTitle type="reg">{user?.name}</SystemTitle>
                </NameNormalizer>
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

const StyledLayer = styled(Layer)`
  background-color: ${(props) => props.theme.colors.backgroundPrimary};
  min-height: calc(100vh - 82px);
`

const Wrapper = styled.div`
  transform: translateY(-50px);
  margin: 0 auto;
  max-width: 800px;
`

const UserInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 35px;
  ${media.sm`
    flex-direction: column;
  `}
`

const UserInfoInner = styled.div`
  display: flex;
  flex-direction: column;
`

const Email = styled(NameNormalizer)`
  color: ${(props) => props.theme.colors.gray};
`

const Description = styled.div`
  min-width: 600px;
  margin-top: 30px;
`

const StyledBtn = css`
  gap: 13px;
  padding: 7px 22px;
`

const EditBtn = styled(SystemBtn)`
  ${StyledBtn}
  ${media.sm`
    margin-top: 10px;
  `}
`

const LogOutBtn = styled(SystemBtn)`
  margin-top: 50px;
  ${StyledBtn}
`

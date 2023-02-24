import { FC } from "react"
import styled from "@emotion/styled"
import Link from "next/link"
import useSWR, { SWRResponse } from "swr"

import { Logo } from "@components/Logo"
import { SystemText } from "@components/common/Text"
import { SystemBtn } from "@components/common/Btn"
import { SystemContainer } from "@components/common/Container"
import { media } from "@/styles/media"
import { AccountPages, AppPages } from "@/routes/constant"
import { cookies } from "@/services/cookie"
import { CookieKeys } from "@/types/cookie"
import AxiosAPI from "@/services/api"
import { ApiRoutes } from "@/routes/api"
import { Avatar } from "../Avatar"
import { UserModel } from "@/types/user"

interface Props {}

export const Nav: FC<Props> = () => {
  const loggedIn = cookies.get(CookieKeys.ACCESS_TOKEN)

  const { data: response }: SWRResponse = useSWR(
    () => (loggedIn ? ApiRoutes.Profile : null),
    AxiosAPI.get
  )
  const user: UserModel = response?.data

  return (
    <Wrapper>
      <Inner>
        <Link href={AppPages.RootPage}>
          <LogoWrapper>
            <Logo />
            <StyledText type="reg">
              Разрабатываем и запускаем сложные веб проекты
            </StyledText>
          </LogoWrapper>
        </Link>

        {!user && (
          <Link href={AppPages.Login}>
            <SystemBtn btnType="secondary">Войти</SystemBtn>
          </Link>
        )}
        {user?.email && (
          <StyledLink href={`${AccountPages.Profile}`}>
            <SystemText type="reg">{user?.name}</SystemText>
            <Avatar name={user?.name} url={user?.image?.url} size="small" />
          </StyledLink>
        )}
      </Inner>
    </Wrapper>
  )
}

const Wrapper = styled.nav`
  width: 100%;
  position: sticky;
  top: 0;
  background-color: ${(props) => props.theme.colors.backgroundPrimary};
  border-bottom: 1px solid ${(props) => props.theme.colors.strokesSecondary};
  z-index: 100;
`

const Inner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 29.5px 15px 20px;
  max-width: 1280px;
  margin: auto;
`

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`

const StyledText = styled(SystemText)`
  max-width: 225px;

  ${media.sm`
    display: none;
  `}
`

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 20px;
`

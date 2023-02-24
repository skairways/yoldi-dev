import { FC } from "react"
import styled from "@emotion/styled"

import { UserModel } from "@/types/user"
import { Avatar } from "@/components/Avatar"
import { css } from "@emotion/react"
import { media } from "@/styles/media"
import { NameNormalizer } from "@/styles/common"

export const UserAccount: FC<UserModel> = ({ name, email, image }) => {
  return (
    <Wrapper>
      <Avatar name={name} url={image?.url} size="small" />
      <Inner>
        <Name type="reg">{name}</Name>
        <Email type="reg">{email}</Email>
      </Inner>
    </Wrapper>
  )
}

const Wrapper = styled.li`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 20px;
  border-bottom: 1px solid ${(props) => props.theme.colors.strokesSecondary};
  padding: 10px;
  position: relative;
`

const Inner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  overflow: hidden;
  ${media.sm`
    flex-direction: column;
    align-items: flex-start;
  `}
`

const BaseCss = css`
  max-width: 45%;
  ${media.md`
    max-width: 100%;
  `}
`

const Name = styled(NameNormalizer)`
  text-transform: capitalize;
  font-weight: 500;
  ${BaseCss};
`

const Email = styled(NameNormalizer)`
  color: ${(props) => props.theme.colors.gray};
  ${BaseCss};
`

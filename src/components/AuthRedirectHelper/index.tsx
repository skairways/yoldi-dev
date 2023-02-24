import { FC } from "react"
import styled from "@emotion/styled"

import { SystemText } from "@components/common/Text"
import Link from "next/link"

interface Props {
  text?: string
  link?: string
  linkText?: string
}

export const AuthRedirectHelper: FC<Props> = ({ text, link, linkText }) => {
  return (
    <Wrapper>
      <StyledText type="reg">{text}</StyledText>
      <SystemText type="reg">
        {link && <StyledLink href={link}>{linkText}</StyledLink>}
      </SystemText>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: center;
  gap: 5px;
  padding: 23px 0;
  background: ${(props) => props.theme.colors.backgroundPrimary};
  border-top: 1px solid ${(props) => props.theme.colors.strokesSecondary};
`

const StyledText = styled(SystemText)`
  color: ${(props) => props.theme.colors.gray};
`

const StyledLink = styled(Link)`
  font-weight: 500;
  color: ${(props) => props.theme.colors.txt};
`

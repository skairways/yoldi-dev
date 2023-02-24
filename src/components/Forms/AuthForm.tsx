import { FC, PropsWithChildren } from "react"
import styled from "@emotion/styled"

import { SystemTitle } from "@components/common/Title"
import { media } from "@/styles/media"

interface Props extends PropsWithChildren {
  title?: string
}

export const AuthFormTemplate: FC<Props> = ({ title, children }) => {
  return (
    <Wrapper>
      <SystemTitle type="reg" mb="10px">
        {title}
      </SystemTitle>
      {children}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 30px;
  background: ${(props) => props.theme.colors.backgroundPrimary};
  max-width: 400px;
  border: 1px solid ${(props) => props.theme.colors.strokesSecondary};
  border-radius: 5px;
  margin: 100px auto;

  ${media.sm`
    border: 0;
    margin: 0 auto;
    height: 100%;
    min-height: calc(100vh - 72px);
  `}
`

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
      <Form>
        <SystemTitle type="reg" mb="10px">
          {title}
        </SystemTitle>
        {children}
      </Form>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  min-height: calc(100vh - 82px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 73px;
  ${media.sm`
    justify-content: start;
    height: auto;
  `}
`

const Form = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 30px;
  background: ${(props) => props.theme.colors.backgroundPrimary};
  max-width: 400px;
  border: 1px solid ${(props) => props.theme.colors.strokesSecondary};
  border-radius: 5px;

  ${media.sm`
    max-width: 100%;
    flex-grow: 1;
    border: 0;
  `}
`

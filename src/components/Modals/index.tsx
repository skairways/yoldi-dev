import styled from "@emotion/styled"
import { FC, PropsWithChildren, useEffect } from "react"

import { media } from "@/styles/media"

interface Props extends PropsWithChildren {
  closeFn: () => void
}

export const Modal: FC<Props> = ({ closeFn, children }) => {
  useEffect(() => {
    document.body.style.overflowY = "hidden"

    return () => {
      document.body.style.overflowY = "auto"
    }
  }, [])

  return (
    <Wrapper>
      <Content>{children}</Content>
      <Overlay onClick={closeFn} />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  z-index: 999;
  ${media.sm`
    justify-content: start;
    top: 81px;
  `}
`

const Overlay = styled.div`
  background: ${(props) => props.theme.colors.txt};
  opacity: 0.3;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
  z-index: 998;
  ${media.sm`
    display: none;
  `}
`

const Content = styled.div`
  position: relative;
  max-width: 600px;
  padding: 30px;
  height: auto;
  width: 100vw;
  background: ${(props) => props.theme.colors.backgroundPrimary};
  border: 1px solid ${(props) => props.theme.colors.backgroundSecondary};
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow-y: auto;
  z-index: 999;
  ${media.sm`
    border: none;
    border-radius: 0;
    height: calc(100% - 81px);
    justify-content: flex-start;
  `}
`

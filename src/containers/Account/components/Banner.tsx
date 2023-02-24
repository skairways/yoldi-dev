import styled from "@emotion/styled"
import { css } from "@emotion/react"
import { FC } from "react"

interface Props {
  url: string | null
}

export const Banner: FC<Props> = ({ ...props }) => {
  return <Wrapper {...props} />
}

const Wrapper = styled.div<Props>`
  width: 100%;
  height: 200px;
  background-color: ${(props) => props.theme.colors.backgroundSecondary};
  border-bottom: 1px solid ${(props) => props.theme.colors.strokesSecondary};
  ${(props) =>
    props.url &&
    css`
      background-image: url(${props.url});
      background-size: cover;
      background-position: center center;
      background-repeat: no-repeat;
    `}
`

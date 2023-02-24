import { StyledSystemProps } from "@/styles/types"
import styled from "@emotion/styled"
import { FC, PropsWithChildren } from "react"
import {
  variant,
  flexbox,
  layout,
  position,
  space,
  typography,
} from "styled-system"

interface TitleProps extends PropsWithChildren {
  type: keyof typeof types
}

export const SystemTitle: FC<TitleProps & StyledSystemProps> = ({
  children,
  ...props
}) => {
  return <Title {...props}>{children}</Title>
}

const types = {
  reg: {
    fontSize: "30px",
    fontWeight: 500,
    lineHeight: "42px",
  },
  sub: {
    fontSize: "18px",
    fontWeight: 400,
    lineHeight: "25.2px",
  },
}

const Title = styled.h2`
  color: ${(props) => props.theme.colors.txt};

  ${variant({
    prop: "type",
    variants: types,
  })};

  ${flexbox}
  ${layout}
  ${position}
  ${space}
  ${typography}
`

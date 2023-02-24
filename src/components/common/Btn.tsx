import { FC, PropsWithChildren } from "react"
import styled from "@emotion/styled"
import { flexbox, layout, position, space, typography } from "styled-system"

import { StyledSystemProps } from "@/styles/types"

interface Props extends React.HTMLAttributes<HTMLButtonElement> {
  btnType: btnTypes
  disabled?: boolean
  type?: "submit"
  loading?: boolean
  loadingLabel?: string
}

type btnTypes = "primary" | "secondary"

export const SystemBtn: FC<Props & PropsWithChildren & StyledSystemProps> = ({
  loading,
  loadingLabel,
  children,
  ...props
}) => {
  switch (props.btnType) {
    case "primary":
      return (
        <PrimaryBtn {...props}>{loading ? loadingLabel : children}</PrimaryBtn>
      )

    case "secondary":
      return <SecondaryBtn {...props}>{children}</SecondaryBtn>
  }
}

const BaseBtn = styled.button<Props>`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  line-height: 25.6px;
  border-radius: 5px;
  border-width: 1px;
  border-style: solid;

  ${flexbox}
  ${layout}
  ${position}
  ${space}
  ${typography}
`

const PrimaryBtn = styled(BaseBtn)<Props>`
  background-color: ${(props) => props.theme.colors.txt};
  color: ${(props) => props.theme.colors.backgroundPrimary};
  border-color: ${(props) => props.theme.colors.txt};
  padding: 12px 33px;

  &:focus {
    border-color: #838383;
  }
  &:disabled {
    border-color: ${(props) => props.theme.colors.strokesPrimary};
    background-color: ${(props) => props.theme.colors.strokesPrimary};
  }
`

const SecondaryBtn = styled(BaseBtn)<Props>`
  background-color: ${(props) => props.theme.colors.backgroundPrimary};
  color: ${(props) => props.theme.colors.txt};
  border-color: ${(props) => props.theme.colors.strokesPrimary};
  padding: 7px 33px;

  &:hover {
    border-color: ${(props) => props.theme.colors.gray};
  }
  &:focus {
    border-color: ${(props) => props.theme.colors.gray};
  }
`

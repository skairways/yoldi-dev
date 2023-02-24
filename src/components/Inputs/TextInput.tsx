import { FC, HTMLAttributes, HTMLInputTypeAttribute, useState } from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/react"

import { ReactComponent as EyeIcon } from "@assets/icons/eye.svg"
import { ReactComponent as CrossedEyeIcon } from "@assets/icons/crossed-eye.svg"

interface Props extends HTMLAttributes<HTMLInputElement> {
  startIcon?: React.ReactNode
  disabled?: boolean
  type?: HTMLInputTypeAttribute
  errorMsg?: string
  touched?: boolean
}

export const SystemTextInput: FC<Props> = ({
  startIcon,
  type,
  touched,
  errorMsg,
  ...props
}) => {
  const [show, setShow] = useState(false)
  const validationErr = Boolean(touched && errorMsg)

  return (
    <Wrapper>
      <InputWrapper>
        {!!startIcon && <StartIcon>{startIcon}</StartIcon>}
        <StyledInput
          padLeft={!!startIcon}
          padRight={type === "password"}
          type={
            type === "password" && !show
              ? "password"
              : type !== "password"
              ? type
              : "text"
          }
          validationErr={validationErr}
          {...props}
        />
        {type === "password" && (
          <EndIcon
            onClick={() => {
              setShow((prev) => !prev)
            }}
          >
            {show === false ? <EyeIcon /> : <CrossedEyeIcon />}
          </EndIcon>
        )}
      </InputWrapper>
      {validationErr && <ErrorLabel>{errorMsg}</ErrorLabel>}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  font-size: 12px;
`

const InputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 540px;
`

const StyledInput = styled.input<{
  padLeft: boolean
  padRight: boolean
  validationErr?: boolean
}>`
  width: 100%;
  background: ${(props) => props.theme.colors.backgroundPrimary};
  border: 1px solid ${(props) => props.theme.colors.strokesPrimary};
  border-radius: 5px;
  color: ${(props) => props.theme.colors.txt};
  outline: none;
  padding: 12px 20px;
  padding-left: ${(props) => props.padLeft && "55px"};
  padding-right: ${(props) => props.padRight && "55px"};
  line-height: 25.6px;

  &:hover,
  &:focus {
    border-color: #838383;
  }
  &:disabled {
    background: ${(props) => props.theme.colors.backgroundSecondary};
    color: #838383;
    border-color: ${(props) => props.theme.colors.backgroundSecondary};
  }
  &::placeholder {
    color: #838383;
  }
  ${(props) =>
    props.validationErr &&
    css`
      border-color: ${props.theme.colors.error} !important;
    `}
`

const StartIcon = styled.div`
  position: absolute;
  left: 20px;
`

const EndIcon = styled.div`
  position: absolute;
  right: 20px;
`

const ErrorLabel = styled.p`
  color: ${(props) => props.theme.colors.error};
`

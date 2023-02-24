import styled from "@emotion/styled"
import { FieldProps } from "formik"
import { FC } from "react"

export const TextArea: FC<FieldProps> = ({ form, field, ...props }) => {
  return <StyledTextArea {...props} {...field} />
}

export const StyledTextArea = styled.textarea`
  width: 100%;
  outline: none;
  font-size: 16px;
  line-height: 25.6px;
  padding: 12px 20px;
  resize: none;
  background: ${(props) => props.theme.colors.backgroundPrimary};
  border: 1px solid ${(props) => props.theme.colors.strokesSecondary};
  border-radius: 5px;
  color: ${(props) => props.theme.colors.txt};
  &::placeholder {
    color: ${(props) => props.theme.colors.gray};
  }
  &:focus-within {
    border-color: ${(props) => props.theme.colors.gray};
  }
`

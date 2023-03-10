import { HTMLAttributes, HTMLInputTypeAttribute } from "react"

export interface ISystemTextInput extends HTMLAttributes<HTMLInputElement> {
  startIcon?: React.ReactNode
  disabled?: boolean
  type?: HTMLInputTypeAttribute
  errorMsg?: string
  touched?: boolean
}

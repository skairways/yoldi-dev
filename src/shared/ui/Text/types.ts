import { PropsWithChildren } from "react"

export interface IText extends PropsWithChildren {
  type: "reg" | "mini"
  className?: string
}

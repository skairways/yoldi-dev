import { PropsWithChildren } from "react"

export interface ITitle extends PropsWithChildren {
  type: "reg" | "sub"
  className?: string
}

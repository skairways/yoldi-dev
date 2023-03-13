import { PropsWithChildren } from "react"

export interface IModal extends PropsWithChildren {
  closeFn: () => void
}

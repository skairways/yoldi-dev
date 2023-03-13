import { FC } from "react"

import { Nav } from "@/shared/ui/Nav"
import { ILayer } from "./types"

export const Layer: FC<ILayer> = ({ children, className }) => {
  return (
    <>
      <Nav />
      <main className={className}>{children}</main>
    </>
  )
}

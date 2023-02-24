import React, { FC, PropsWithChildren } from "react"
import { ThemeProvider as EmotionThemeProvider } from "@emotion/react"

import { themes } from "./themes"

export const selectedTheme = themes.light

export const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <EmotionThemeProvider theme={selectedTheme}>
      {children}
    </EmotionThemeProvider>
  )
}

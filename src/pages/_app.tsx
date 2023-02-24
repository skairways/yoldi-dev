import type { AppProps } from "next/app"
import { Global } from "@emotion/react"

import { ThemeProvider as EmotionThemeProvider } from "@/styles/theme/ThemeProvider"
import { GlobalStyles } from "@/styles/globals"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <EmotionThemeProvider>
      <Global styles={GlobalStyles} />
      <Component {...pageProps} />
    </EmotionThemeProvider>
  )
}

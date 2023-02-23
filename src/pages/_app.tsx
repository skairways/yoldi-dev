import type { AppProps } from "next/app";
import { CacheProvider } from "@emotion/react";
import { EmotionCache } from "@emotion/cache";
import { Global } from "@emotion/react";

import createEmotionCache from "@utility/createEmotionCache";
import { ThemeProvider as EmotionThemeProvider } from "@/styles/theme/ThemeProvider";
import { GlobalStyles } from "@/styles/globals";

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const clientSideEmotionCache = createEmotionCache();

export default function App({
  Component,
  emotionCache = clientSideEmotionCache,
  pageProps,
}: MyAppProps) {
  return (
    <CacheProvider value={emotionCache}>
      <EmotionThemeProvider>
        <Global styles={GlobalStyles} />
        <Component {...pageProps} />
      </EmotionThemeProvider>
    </CacheProvider>
  );
}

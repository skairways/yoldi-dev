import { lightTheme, themes } from "@styles/theme/themes"

export type ThemeKeyType = keyof typeof themes | "system"

export type EmotionTheme = typeof lightTheme

import { css } from "@emotion/react"

// Breakpoints can be updated/extended any time
export const sizes = {
  xs: 375,
  sm: 600,
  md: 960,
  lg: 1280,
  xl: 1920,
}

// Iterate through the sizes and create a media template
export const media = (Object.keys(sizes) as Array<keyof typeof sizes>).reduce(
  (acc, label) => {
    acc[label] = (first: any, ...interpolations: any[]) => css`
      @media (max-width: ${sizes[label]}px) {
        ${css(first, ...interpolations)}
      }
    `

    return acc
  },
  {} as { [key in keyof typeof sizes]: any }
)

import "@emotion/react";

import { EmotionTheme } from "@/styles/theme/types";

declare module "@emotion/react" {
  export interface Theme extends EmotionTheme {}
}

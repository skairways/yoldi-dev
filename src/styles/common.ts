import styled from "@emotion/styled"
import { SystemText } from "@/components/common/Text"

export const NameNormalizer = styled(SystemText)`
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  max-width: 250px;
  position: relative;
`

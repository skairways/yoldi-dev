import styled from "@emotion/styled"
import { css } from "@emotion/react"

import { Layer } from "@/components/common/Layer"
import { SystemBtn } from "@/components/common/Btn"
import { media } from "@/styles/media"
import { NameNormalizer } from "@/styles/common"
import { SystemTitle } from "@/components/common/Title"

export const StyledLayer = styled(Layer)`
  background-color: ${(props) => props.theme.colors.backgroundPrimary};
  min-height: calc(100vh - 82px);
`

export const Wrapper = styled.div`
  transform: translateY(-50px);
  margin: 0 auto;
  max-width: 800px;
`

export const UserInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 35px;
  ${media.sm`
    flex-direction: column;
  `}
`

export const UserInfoInner = styled.div`
  display: flex;
  flex-direction: column;
`

export const Email = styled(NameNormalizer)`
  color: ${(props) => props.theme.colors.gray};
`

export const Description = styled.div`
  min-width: 600px;
  margin-top: 30px;
`

export const StyledBtn = css`
  gap: 13px;
  padding: 7px 22px;
`

export const EditBtn = styled(SystemBtn)`
  ${StyledBtn}
  ${media.sm`
    margin-top: 10px;
  `}
`

export const LogOutBtn = styled(SystemBtn)`
  margin-top: 50px;
  ${StyledBtn}
`

export const Name = styled(SystemTitle)`
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  max-width: 250px;
  position: relative;
`

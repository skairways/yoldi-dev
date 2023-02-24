import { FC } from "react"
import styled from "@emotion/styled"
import { UserModel } from "@/types/user"
import { SystemTitle } from "@/components/common/Title"
import { Modal } from "@/components/Modals"
import { EditForm } from "./EditForm"

interface Props {
  closeFn: () => void
  user: UserModel
}

export const EditModal: FC<Props> = ({ closeFn, user }) => {
  return (
    <Modal closeFn={closeFn}>
      <Wrapper>
        <SystemTitle type="reg">Редактировать профиль</SystemTitle>
        {user && <EditForm cancelFn={closeFn} user={user} />}
      </Wrapper>
    </Modal>
  )
}

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`

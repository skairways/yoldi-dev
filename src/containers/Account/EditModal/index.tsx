import { FC } from "react"

import { SystemTitle } from "@/shared/ui/Title"
import { Modal } from "@/components/Modal"
import { EditForm } from "../EditForm"
import styles from "./EditModal.module.scss"
import { IEditModal } from "./types"

export const EditModal: FC<IEditModal> = ({ closeFn, user }) => {
  return (
    <Modal closeFn={closeFn}>
      <div className={styles.wrapper}>
        <SystemTitle type="reg">Редактировать профиль</SystemTitle>
        {user && <EditForm cancelFn={closeFn} user={user} />}
      </div>
    </Modal>
  )
}

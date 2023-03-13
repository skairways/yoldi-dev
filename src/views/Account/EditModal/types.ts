import { UserModel } from "@/shared/types/user"

export interface IEditModal {
  closeFn: () => void
  user: UserModel
}

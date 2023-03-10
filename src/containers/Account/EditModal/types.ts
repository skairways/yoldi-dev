import { UserModel } from "@/types/user"

export interface IEditModal {
  closeFn: () => void
  user: UserModel
}

import { UserModel } from "@/types/user"

export interface IEditForm {
  user: UserModel
  cancelFn: () => void
}

export interface FormValues {
  name: string
  description: string
  slug: string
}

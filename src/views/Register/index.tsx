import { FC } from "react"

import { Layer } from "@/shared/ui/Layer"
import { AuthRedirect } from "@/shared/ui/AuthRedirect"
import { AppPages } from "@/shared/routes/paths"
import { RegisterForm } from "@/views/Register/RegisterForm"

export const RegisterPage: FC = () => {
  return (
    <Layer>
      <RegisterForm />

      <AuthRedirect
        link={AppPages.Login}
        text="Уже есть аккаунт?"
        linkText="Войти"
      />
    </Layer>
  )
}

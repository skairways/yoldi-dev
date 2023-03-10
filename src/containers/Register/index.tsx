import { FC } from "react"

import { Layer } from "@/components/Layer"
import { AuthRedirectHelper } from "@/components/AuthRedirect"
import { AppPages } from "@/routes/constant"
import { RegisterForm } from "@/containers/Register/RegisterForm"

export const RegisterPage: FC = () => {
  return (
    <Layer>
      <RegisterForm />

      <AuthRedirectHelper
        link={AppPages.Login}
        text="Уже есть аккаунт?"
        linkText="Войти"
      />
    </Layer>
  )
}

import { FC } from "react"

import { Layer } from "@/components/common/Layer"
import { AuthRedirectHelper } from "@/components/AuthRedirectHelper"
import { AppPages } from "@/routes/constant"
import { RegisterForm } from "@/containers/Register/components/Form"

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

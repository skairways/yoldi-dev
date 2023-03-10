import { FC } from "react"

import { Layer } from "@/components/Layer"
import { AuthRedirectHelper } from "@/components/AuthRedirect"
import { AppPages } from "@/routes/constant"
import { LoginForm } from "@/containers/LogIn/LoginForm"

export const LogInPage: FC = () => {
  return (
    <Layer>
      <LoginForm />
      <AuthRedirectHelper
        link={AppPages.Register}
        text="Еще нет аккаунта?"
        linkText="Зарегистрироваться"
      />
    </Layer>
  )
}

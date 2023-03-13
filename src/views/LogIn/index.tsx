import { FC } from "react"

import { Layer } from "@/shared/ui/Layer"
import { AuthRedirect } from "@/shared/ui/AuthRedirect"
import { AppPages } from "@/shared/routes/paths"
import { LoginForm } from "@/views/LogIn/LoginForm"

export const LogInPage: FC = () => {
  return (
    <Layer>
      <LoginForm />
      <AuthRedirect
        link={AppPages.Register}
        text="Еще нет аккаунта?"
        linkText="Зарегистрироваться"
      />
    </Layer>
  )
}

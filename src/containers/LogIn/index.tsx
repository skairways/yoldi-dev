import { FC } from "react";

import { Layer } from "@/components/common/Layer";
import { AuthRedirectHelper } from "@/components/AuthRedirectHelper";
import { AppPages } from "@/routes/constant";
import { LoginForm } from "@/containers/LogIn/components/Form";

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
  );
};

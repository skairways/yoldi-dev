import { Field, Form, Formik } from "formik"
import * as Yup from "yup"
import { useRouter } from "next/router"
import { useState } from "react"

import { AuthFormTemplate } from "@/shared/ui/AuthForm"
import { validationSchema } from "@/shared/utils/validationSchema"
import { SystemBtn } from "@/shared/ui/Btn"
import AxiosAPI from "@/shared/services/api"
import { ApiRoutes } from "@/shared/routes/api"
import { cookies } from "@/shared/services/cookie"
import { CookieKeys } from "@/shared/types/cookie"
import { AccountPages } from "@/shared/routes/paths"
import { FormValues } from "./types"
import { ReactComponent as MailIcon } from "@/assets/icons/mail.svg"
import { FormikInput } from "@/shared/ui/FormikInputs/Text"
import { ReactComponent as LockIcon } from "@/assets/icons/lock.svg"

export const LoginForm = () => {
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  const formik = {
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object().shape({
      email: validationSchema.email,
      password: validationSchema.password,
    }),
    onSubmit: (values: FormValues) => {
      setLoading(true)
      AxiosAPI.post(ApiRoutes.AuthLogin, values)
        .then((res) => {
          cookies.set(CookieKeys.ACCESS_TOKEN, res.data.value)
          router.push(`${AccountPages.Profile}`)
        })
        .catch((err) => {
          window.alert(`ошибка при входе: ${err}`)
        })
        .finally(() => {
          setLoading(false)
        })
    },
  }

  return (
    <Formik
      initialValues={formik.initialValues}
      validationSchema={formik.validationSchema}
      onSubmit={formik.onSubmit}
    >
      {({ isValid, dirty }) => (
        <Form>
          <AuthFormTemplate title="Вход в Yoldi Agency">
            <Field
              name="email"
              type="email"
              placeholder="E-mail"
              startIcon={<MailIcon />}
              component={FormikInput}
            />
            <Field
              name="password"
              type="password"
              placeholder="Пароль"
              startIcon={<LockIcon />}
              component={FormikInput}
            />
            <SystemBtn
              btnType="primary"
              disabled={!dirty || !isValid}
              type="submit"
              loading={loading}
              loadingLabel="Загрузка..."
              style={{ marginTop: "10px" }}
            >
              Войти
            </SystemBtn>
          </AuthFormTemplate>
        </Form>
      )}
    </Formik>
  )
}

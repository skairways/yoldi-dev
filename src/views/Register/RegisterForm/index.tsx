import { Field, Form, Formik } from "formik"
import * as Yup from "yup"
import { useRouter } from "next/router"

import { AuthFormTemplate } from "@/shared/ui/AuthForm"
import { validationSchema } from "@/shared/utils/validationSchema"
import { SystemBtn } from "@/shared/ui/Btn"
import AxiosAPI from "@/shared/services/api"
import { cookies } from "@/shared/services/cookie"
import { CookieKeys } from "@/shared/types/cookie"
import { ApiRoutes } from "@/shared/routes/api"
import { AccountPages } from "@/shared/routes/paths"
import { useState } from "react"
import { FormValues } from "./types"
import { FormikInput } from "@/shared/ui/FormikInputs/Text"
import { ReactComponent as UserIcon } from "@/assets/icons/user.svg"
import { ReactComponent as MailIcon } from "@/assets/icons/mail.svg"
import { ReactComponent as LockIcon } from "@/assets/icons/lock.svg"

export const RegisterForm = () => {
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  const formik = {
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object().shape({
      name: validationSchema.name,
      email: validationSchema.email,
      password: validationSchema.password,
    }),
    onSubmit: (values: FormValues) => {
      setLoading(true)
      AxiosAPI.post(ApiRoutes.AuthSignUp, values)
        .then((res) => {
          cookies.set(CookieKeys.ACCESS_TOKEN, res.data.value)
          router.push(`${AccountPages.Profile}`)
        })
        .catch((err) => {
          window.alert(`ошибка при регистрации: ${err}`)
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
          <AuthFormTemplate title="Регистрация в Yoldi Agency">
            <Field
              name="name"
              type="text"
              placeholder="Имя"
              startIcon={<UserIcon />}
              component={FormikInput}
            />
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
              Создать аккаунт
            </SystemBtn>
          </AuthFormTemplate>
        </Form>
      )}
    </Formik>
  )
}

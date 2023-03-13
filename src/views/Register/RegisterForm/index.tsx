import { Field, Form, Formik } from "formik"
import * as Yup from "yup"
import { useRouter } from "next/router"

import { AuthFormTemplate } from "@/shared/ui/AuthForm"
import { validationSchema } from "@/shared/utils/validationSchema"
import { NameInput } from "@/shared/ui/Inputs/NameInput"
import { SystemBtn } from "@/shared/ui/Btn"
import { EmailInput } from "@/shared/ui/Inputs/EmailInput"
import { PasswordInput } from "@/shared/ui/Inputs/PasswordInput"
import AxiosAPI from "@/shared/services/api"
import { cookies } from "@/shared/services/cookie"
import { CookieKeys } from "@/shared/types/cookie"
import { ApiRoutes } from "@/shared/routes/api"
import { AccountPages } from "@/shared/routes/paths"
import { useState } from "react"
import { FormValues } from "./types"

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
            <Field name="name" type="text" component={NameInput} />
            <Field name="email" type="email" component={EmailInput} />
            <Field name="password" type="password" component={PasswordInput} />
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

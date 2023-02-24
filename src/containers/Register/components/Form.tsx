import { Field, Form, Formik } from "formik"
import * as Yup from "yup"
import { useRouter } from "next/router"

import { AuthFormTemplate } from "@components/Forms/AuthForm"
import { validationSchema } from "@utility/validationSchema"
import { NameInput } from "@components/Inputs/NameInput"
import { SystemBtn } from "@components/common/Btn"
import { EmailInput } from "@components/Inputs/EmailInput"
import { PasswordInput } from "@components/Inputs/PasswordInput"
import AxiosAPI from "@/services/api"
import { cookies } from "@/services/cookie"
import { CookieKeys } from "@/types/cookie"
import { ApiRoutes } from "@/routes/api"
import { AccountPages } from "@/routes/constant"
import { useState } from "react"

interface FormValues {
  name: string
  email: string
  password: string
}

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
              mt="10px"
              loading={loading}
              loadingLabel="Загрузка..."
            >
              Создать аккаунт
            </SystemBtn>
          </AuthFormTemplate>
        </Form>
      )}
    </Formik>
  )
}

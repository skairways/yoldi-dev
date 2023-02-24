import { Field, Form, Formik } from "formik"
import * as Yup from "yup"
import { useRouter } from "next/router"
import { useState } from "react"

import { AuthFormTemplate } from "@components/Forms/AuthForm"
import { validationSchema } from "@utility/validationSchema"
import { SystemBtn } from "@components/common/Btn"
import { EmailInput } from "@components/Inputs/EmailInput"
import { PasswordInput } from "@components/Inputs/PasswordInput"
import AxiosAPI from "@/services/api"
import { ApiRoutes } from "@/routes/api"
import { cookies } from "@/services/cookie"
import { CookieKeys } from "@/types/cookie"
import { AccountPages } from "@/routes/constant"

interface FormValues {
  email: string
  password: string
}

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
              Войти
            </SystemBtn>
          </AuthFormTemplate>
        </Form>
      )}
    </Formik>
  )
}

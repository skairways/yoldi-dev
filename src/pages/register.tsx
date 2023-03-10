import Head from "next/head"

import { RegisterPage } from "@/views/Register"

const Register = () => {
  return (
    <>
      <Head>
        <title>Регистрация</title>
        <meta name="description" content="Страница регистрация в Yoldi" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <RegisterPage />
    </>
  )
}

export default Register

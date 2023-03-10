import { LogInPage } from "@/views/LogIn"
import Head from "next/head"

const Login = () => {
  return (
    <>
      <Head>
        <title>Войти</title>
        <meta name="description" content="Страница входа в свой аккаунт" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <LogInPage />
    </>
  )
}

export default Login

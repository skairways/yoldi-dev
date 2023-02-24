import Head from "next/head"
import { AccountPage } from "@/containers/Account"

export default function Account() {
  return (
    <>
      <Head>
        <title>Аккаунт</title>
        <meta name="description" content="Страница аккаунта пользователья" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AccountPage />
    </>
  )
}

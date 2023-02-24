import Head from "next/head"
import { Inter } from "@next/font/google"
import { AccountsListPage } from "@/containers/AccountsList"

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Пользоваетели</title>
        <meta name="description" content="Пользователи Yoldi" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AccountsListPage />
    </>
  )
}

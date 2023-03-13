import Head from "next/head"
import { AccountsListPage } from "@/views/AccountsList"

const Home = () => {
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

export default Home

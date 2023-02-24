import Head from "next/head"

import { SystemText } from "@/components/common/Text"
import { SystemTitle } from "@/components/common/Title"
import { SystemBtn } from "@/components/common/Btn"
import { SystemTextInput } from "@/components/Inputs/TextInput"

export default function System() {
  return (
    <>
      <Head>
        <title>Design system</title>
        <meta name="description" content="Design system for yoldi project" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <SystemTitle type="reg">Title</SystemTitle>
        <SystemTitle type="sub">SubTitle</SystemTitle>
        <SystemText type="reg">Regular paragraph</SystemText>
        <SystemText type="mini">Mini paragraph</SystemText>

        <SystemBtn btnType="primary">Button</SystemBtn>
        <SystemBtn btnType="primary" disabled>
          Button
        </SystemBtn>

        <SystemBtn btnType="secondary">Button</SystemBtn>
        <SystemBtn btnType="secondary" disabled>
          Button
        </SystemBtn>

        <SystemTextInput placeholder="input" />
        <SystemTextInput placeholder="input" type="password" />
        <SystemTextInput placeholder="input" startIcon={<>@</>} />
        <SystemTextInput placeholder="input" disabled />
      </main>
    </>
  )
}

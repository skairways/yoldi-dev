import Head from "next/head"

import { SystemText } from "@/shared/ui/Text"
import { SystemTitle } from "@/shared/ui/Title"
import { SystemBtn } from "@/shared/ui/Btn"
import { SystemTextInput } from "@/components/Inputs/TextInput"
import { GridLoading } from "@/shared/ui/GridLoading"
import { SystemContainer } from "@/shared/ui/Container"

const System = () => {
  return (
    <>
      <Head>
        <title>Design system</title>
        <meta name="description" content="Design system for yoldi project" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <SystemContainer>
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

          <GridLoading isFullPageHeight />
        </SystemContainer>
      </main>
    </>
  )
}

export default System

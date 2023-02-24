import { FC, useState } from "react"
import { Field, Form, Formik } from "formik"
import * as Yup from "yup"
import styled from "@emotion/styled"

import { validationSchema } from "@/utility/validationSchema"
import AxiosAPI from "@/services/api"
import { ApiRoutes } from "@/routes/api"
import { AppPages } from "@/routes/constant"
import { UserModel } from "@/types/user"
import { TextArea } from "@/components/Inputs/TextArea"
import { SystemBtn } from "@/components/common/Btn"
import { SystemText } from "@/components/common/Text"
import { FormikInput } from "@/components/Inputs/FormikInput"

interface Props {
  user: UserModel
  cancelFn: () => void
}

interface FormValues {
  name: string
  description: string
  slug: string
}

export const EditForm: FC<Props> = ({ user, cancelFn }) => {
  const [loading, setLoading] = useState(false)
  const domain = window.location.host

  const formik = {
    initialValues: {
      name: user?.name,
      description: user?.description || "",
      slug: user?.slug,
    },
    validationSchema: Yup.object({
      name: validationSchema.name,
      description: validationSchema.description,
      slug: validationSchema.slug,
    }),
    onSubmit: (values: FormValues) => {
      setLoading(true)
      AxiosAPI.patch(ApiRoutes.Profile, values)
        .then(() => {
          window.location = `${AppPages.Account}/${values.slug}` as string &
            Location
        })
        .catch((err) => {
          console.log(err)
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
      {({ isValid }) => (
        <StyledForm>
          <FieldWrapper>
            <Label type="reg">Имя</Label>
            <Field
              component={FormikInput}
              type="text"
              name="name"
              placeholder="Имя"
            />
          </FieldWrapper>
          <FieldWrapper>
            <Label type="reg">Адрес профиля</Label>
            <FullDomain>
              <Domain type="reg">
                {domain}
                {AppPages.Account}/
              </Domain>
              <Field
                component={StyledSystemTextInput}
                type="text"
                name="slug"
                placeholder="Адрес профиля"
              />
            </FullDomain>
          </FieldWrapper>
          <FieldWrapper>
            <Label type="reg">Описание</Label>
            <Field
              component={TextArea}
              name="description"
              placeholder="Ваша информация..."
              rows="5"
            />
          </FieldWrapper>
          <BtnsWrapper>
            <SystemBtn
              btnType="secondary"
              width="100%"
              height="50px"
              mr="10px"
              onClick={cancelFn}
            >
              Отмена
            </SystemBtn>
            <SystemBtn
              disabled={!isValid}
              btnType="primary"
              type="submit"
              width="100%"
              loading={loading}
              loadingLabel={"Загрузка..."}
            >
              Сохранить
            </SystemBtn>
          </BtnsWrapper>
        </StyledForm>
      )}
    </Formik>
  )
}

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 15px;
  margin-top: 25px;
`

const Domain = styled(SystemText)`
  display: flex;
  flex-shrink: 0;
  width: max-content;
  background: ${(props) => props.theme.colors.backgroundSecondary};
  color: ${(props) => props.theme.colors.gray};
  border: 1px solid ${(props) => props.theme.colors.strokesPrimary};
  border-radius: 5px 0 0 5px;
  border-right: none;
  padding: 12px 20px;
  line-height: 25.6px;
  overflow-x: auto;
  white-space: nowrap;
  ::-webkit-scrollbar {
    display: none;
  }
`

const Label = styled(SystemText)`
  color: ${(props) => props.theme.colors.gray};
  margin-bottom: 5px;
  cursor: default;
`

const FieldWrapper = styled.div`
  width: 100%;
`

const FullDomain = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
`

const BtnsWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`

const StyledSystemTextInput = styled(FormikInput)`
  border-radius: 0 5px 5px 0;
`

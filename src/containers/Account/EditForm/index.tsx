import { FC, useState } from "react"
import { Field, Form, Formik } from "formik"
import * as Yup from "yup"

import { validationSchema } from "@/utility/validationSchema"
import AxiosAPI from "@/services/api"
import { ApiRoutes } from "@/routes/api"
import { AppPages } from "@/routes/constant"
import { TextArea } from "@/components/Inputs/TextArea"
import { SystemBtn } from "@/shared/ui/Btn"
import { SystemText } from "@/shared/ui/Text"
import { FormikInput } from "@/components/Inputs/FormikInput"
import { FormValues, IEditForm } from "./types"
import styles from "./EditForm.module.scss"

export const EditForm: FC<IEditForm> = ({ user, cancelFn }) => {
  const [loading, setLoading] = useState(false)
  const domain = window.location.host

  const formik = {
    initialValues: {
      name: user?.name,
      description: user?.description || "",
      slug: user?.slug,
    },
    validationSchema: Yup.object({
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
        <Form className={styles.form}>
          <div className={styles.fieldWrapper}>
            <SystemText className={styles.label} type="reg">
              Имя
            </SystemText>
            <Field
              component={FormikInput}
              type="text"
              name="name"
              placeholder="Имя"
            />
          </div>
          <div className={styles.fieldWrapper}>
            <SystemText className={styles.label} type="reg">
              Адрес профиля
            </SystemText>
            <div className={styles.fullDomain}>
              <SystemText className={styles.domain} type="reg">
                {domain}
                {AppPages.Account}/
              </SystemText>
              <Field
                component={FormikInput}
                type="text"
                name="slug"
                placeholder="Адрес профиля"
              />
            </div>
          </div>
          <div className={styles.fieldWrapper}>
            <SystemText className={styles.label} type="reg">
              Описание
            </SystemText>
            <Field
              component={TextArea}
              className={styles.address}
              name="description"
              placeholder="Ваша информация..."
              rows="5"
            />
          </div>
          <div className={styles.btnsWrapper}>
            <SystemBtn
              btnType="secondary"
              // width="100%"
              // height="50px"
              // mr="10px"
              onClick={cancelFn}
            >
              Отмена
            </SystemBtn>
            <SystemBtn
              disabled={!isValid}
              btnType="primary"
              type="submit"
              // width="100%"
              loading={loading}
              loadingLabel={"Загрузка..."}
            >
              Сохранить
            </SystemBtn>
          </div>
        </Form>
      )}
    </Formik>
  )
}

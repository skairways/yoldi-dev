import * as Yup from "yup"

export const validationSchema = {
  name: Yup.string().required("Обязательное поле").min(3, "Минимум 3 символа"),
  email: Yup.string()
    .required("Обязательное поле")
    .email("Почта не правильная"),
  password: Yup.string()
    .required("Обязательное поле")
    .min(4, "Минимум 4 символа"),
  description: Yup.string(),
  slug: Yup.string()
    .required("Обязательное поле")
    .trim()
    .min(3, "Минимум 3 символа"),
}

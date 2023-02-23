import CookieProvider from "js-cookie"

export const cookies = CookieProvider
export const cookieConfig = () => {
  const expirationDate = new Date()
  expirationDate.setTime(expirationDate.getTime() + 24 * 60 * 60 * 1000)

  return {
    path: "/",
    domain: process.env.NODE_ENV,
    expires: expirationDate,
  }
}

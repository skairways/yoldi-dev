import { FC, useState } from "react"
import cx from "classnames"

import styles from "./TextInput.module.scss"
import { ReactComponent as EyeIcon } from "@/assets/icons/eye.svg"
import { ReactComponent as CrossedEyeIcon } from "@/assets/icons/crossed-eye.svg"
import { ISystemTextInput } from "./types"

export const SystemTextInput: FC<ISystemTextInput> = ({
  startIcon,
  type,
  touched,
  errorMsg,
  className,
  ...props
}) => {
  const [show, setShow] = useState(false)
  const validationErr = Boolean(touched && errorMsg)

  return (
    <div className={styles.root}>
      <div className={styles.wrapper}>
        {!!startIcon && <div className={styles.startIcon}>{startIcon}</div>}
        <input
          className={cx(styles.input, className, {
            [`${styles.pl}`]: !!startIcon,
            [`${styles.pr}`]: type === "password",
            [`${styles.validationErr}`]: validationErr,
          })}
          type={
            type === "password" && !show
              ? "password"
              : type !== "password"
              ? type
              : "text"
          }
          {...props}
        />
        {type === "password" && (
          <div
            className={styles.endIcon}
            onClick={() => {
              setShow((prev) => !prev)
            }}
          >
            {show === false ? <EyeIcon /> : <CrossedEyeIcon />}
          </div>
        )}
      </div>
      {validationErr && <p className={styles.errorLabel}>{errorMsg}</p>}
    </div>
  )
}

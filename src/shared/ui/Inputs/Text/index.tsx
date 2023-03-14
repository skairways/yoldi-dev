import { FC, useEffect, useState } from "react"
import cx from "classnames"

import styles from "./TextInput.module.scss"
import { ReactComponent as EyeIcon } from "@/assets/icons/eye.svg"
import { ReactComponent as CrossedEyeIcon } from "@/assets/icons/crossed-eye.svg"
import { ISystemTextInput } from "./types"
import { useFocus } from "@/shared/hooks/useFocus"

export const SystemTextInput: FC<ISystemTextInput> = ({
  startIcon,
  type,
  touched,
  errorMsg,
  className,
  ...props
}) => {
  const [show, setShow] = useState(false)
  const [curType, setCurType] = useState(type)
  const [inputRef, setInputFocus] = useFocus()

  const validationErr = Boolean(touched && errorMsg)

  const args = {
    className: cx(styles.input, className, {
      [`${styles.pl}`]: !!startIcon,
      [`${styles.pr}`]: type === "password",
      [`${styles.validationErr}`]: validationErr,
    }),
    type: curType,
  }

  useEffect(() => {
    if (type === "password" && !show) {
      setCurType("password")
    } else if (type !== "password") {
      setCurType(type)
    } else {
      setCurType("text")
    }
  }, [type, show])

  return (
    <div className={styles.root} onClick={setInputFocus}>
      <div className={styles.wrapper}>
        {!!startIcon && <div className={styles.startIcon}>{startIcon}</div>}
        <input ref={inputRef} {...args} {...props} />
        {type === "password" && (
          <button
            className={styles.endIcon}
            onClick={() => {
              setShow((prev) => !prev)
            }}
            type="button"
          >
            {show === false ? <EyeIcon /> : <CrossedEyeIcon />}
          </button>
        )}
      </div>
      {validationErr && <p className={styles.errorLabel}>{errorMsg}</p>}
    </div>
  )
}

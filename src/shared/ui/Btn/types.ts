export interface ISystemBtn extends React.HTMLAttributes<HTMLButtonElement> {
  btnType: btnTypes
  disabled?: boolean
  type?: "submit"
  loading?: boolean
  loadingLabel?: string
  className?: string
}

type btnTypes = "primary" | "secondary"

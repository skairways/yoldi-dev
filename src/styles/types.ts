export interface StyledSystemProps {
  borderColor?: string

  // layout props
  overflow?: string
  height?: string | number
  width?: string
  maxWidth?: string | number
  maxHeight?: string | number

  // position props - position
  position?: "absolute" | "fixed" | "relative"
  zIndex?: number
  top?: string
  right?: string
  bottom?: string
  left?: string

  // typography props
  fontSize?: number | string
  fontWeight?: number

  // margin props - space
  m?: string | number // margin
  mt?: string | number // margin top
  mr?: string | number // margin right
  mb?: string | number // margin bottom
  ml?: string | number // margin left
  mx?: string | number // margin inline
  my?: string | number // margin block

  // padding props - space
  padding?: string
  p?: string | number // padding
  pt?: string | number // padding top
  pr?: string | number // padding right
  pb?: string | number // padding bottom
  pl?: string | number // padding left
  px?: string | number // padding inline
  py?: string | number // padding block

  border?: string | number
  borderRadius?: string | number

  bg?: string // background-color
  color?: string
}

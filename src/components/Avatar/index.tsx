import { FC } from "react"
import Image from "next/image"
import styled from "@emotion/styled"
import { variant } from "styled-system"

interface Props {
  size: keyof typeof sizes
  url: string | null
  name: string | null
}

export const Avatar: FC<Props> = ({ name, url, ...props }) => {
  return (
    <Wrapper {...props}>
      {url ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={url} alt={name || "user-img"} />
      ) : (
        name?.charAt(0)
      )}
    </Wrapper>
  )
}

const sizes = {
  small: {
    width: "50px",
    height: "50px",
    fontSize: "18px",
  },
  large: {
    width: "100px",
    height: "100px",
    fontSize: "36px",
  },
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  border-radius: 50%;
  color: ${(props) => props.theme.colors.txt};
  border: 1px solid ${(props) => props.theme.colors.strokesSecondary};
  background-color: ${(props) => props.theme.colors.backgroundSecondary};
  text-transform: capitalize;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  ${variant({
    prop: "size",
    variants: sizes,
  })}
`

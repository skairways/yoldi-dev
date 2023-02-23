import { FC, PropsWithChildren } from "react";
import { flexbox, layout, position, space, typography } from "styled-system";

import { Nav } from "@components/Nav";
import styled from "@emotion/styled";
import { StyledSystemProps } from "@/styles/types";

export const Layer: FC<PropsWithChildren & StyledSystemProps> = ({ children, ...props }) => {
  return (
    <Wrapper {...props}>
      <Nav />
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.main`
  ${flexbox}
  ${layout}
  ${position}
  ${space}
  ${typography}
`

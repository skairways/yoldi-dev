import { FC, PropsWithChildren } from "react";
import { variant } from "styled-system";
import styled from "@emotion/styled";
import { flexbox, layout, position, space, typography } from "styled-system";
import { StyledSystemProps } from "@/styles/types";

interface TextProps extends PropsWithChildren {
  type: keyof typeof types;
}

export const SystemText: FC<TextProps & StyledSystemProps> = ({ children, ...props }) => {
  return <Text {...props}>{children}</Text>;
};

const types = {
  reg: {
    fontSize: ["14px", "15px", "16px"],
    lineHeight: "25.6px",
  },
  mini: {
    fontSize: ["12px"],
    lineHeight: "19.2px",
  },
};

const Text = styled.p`
  color: ${(props) => props.theme.colors.txt};

  ${variant({
    prop: "type",
    variants: types,
  })};

  ${flexbox}
  ${layout}
  ${position}
  ${space}
  ${typography}
`;

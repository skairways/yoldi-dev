import { FC, PropsWithChildren } from "react";
import styled from "@emotion/styled";

export const SystemContainer: FC<PropsWithChildren> = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

const Wrapper = styled.div`
  width: 100%;
  max-width: 1310px;
  margin: auto;
  padding-right: 15px;
  padding-left: 15px;
`;

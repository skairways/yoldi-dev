import styled from "@emotion/styled";
import { FC } from "react";

interface Props {
  fullPageHeight?: boolean
}

export const GridLoading: FC<Props> = (props) => {
  return (
    <Wrapper {...props}>
      <div className="lds-ellipsis">
        <div className="first"></div>
        <div className="second"></div>
        <div className="third"></div>
        <div className="fourth"></div>
      </div>
    </Wrapper>
  );
};


const Wrapper = styled.div<{ fullPageHeight?: boolean }>`
  position: static;
  z-index: 99;
  height: calc(100 ${({ fullPageHeight }) => (fullPageHeight ? "vh" : "%")} - 76px);
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  animation: fadeIn 1s;

  &.contained {
    position: absolute;
    top: 80px;
    width: 100%;
    left: calc(50% - 30px);
  }
  .lds-ellipsis {
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;
  }
  .lds-ellipsis div {
    position: absolute;
    top: 33px;
    width: 13px;
    height: 13px;
    border-radius: 50%;
    background: ${props => props.theme.colors.txt};
    animation-timing-function: cubic-bezier(0, 1, 1, 0);
  }
  .first {
    left: 8px;
    animation: lds-ellipsis1 0.6s infinite;
  }
  .second {
    left: 8px;
    animation: lds-ellipsis2 0.6s infinite;
  }
  .third {
    left: 32px;
    animation: lds-ellipsis2 0.6s infinite;
  }
  .fourth {
    left: 56px;
    animation: lds-ellipsis3 0.6s infinite;
  }
  @keyframes lds-ellipsis1 {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }
  @keyframes lds-ellipsis3 {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(0);
    }
  }
  @keyframes lds-ellipsis2 {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(24px, 0);
    }
  }
`


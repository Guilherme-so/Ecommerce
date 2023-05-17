import React, { ReactNode } from "react";
import { css, styled } from "styled-components";

interface IButton {
  children: ReactNode;
  size?: string;
  btntype?: string;
  onClick?: any
}

const StyledButton = styled.button<{
  size?: string;
  btntype?: string;
}>`
  border: 0;
  padding: 5px 15px;
  border-radius: 5px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;

  svg {
    font-size: 16px;
    margin-right: 3px;
  }

  ${({ size }) =>
    size === "large" &&
    css`
      font-size: 1.2rem;
      padding: 10px 20px;

      svg {
        font-size: 22px;
        margin-right: 3px;
        translate: 0px -1.5px;
      }
    `}
  ${({ btntype }) =>
    btntype === "primary" &&
    css`
      background-color: #5542f6;
      color: white;
    `}
    ${({ btntype }) =>
    btntype === "white" &&
    css`
      background-color: #fff;
      color: #000;
    `}
    ${({ btntype }) =>
    btntype === "outline" &&
    css`
      background-color: #000;
      color: #fff;
      border: 1px solid #fff;
    `}
`;

export default function Button({ children, size, btntype,onClick }: IButton) {
  return (
    <StyledButton size={size} btntype={btntype} onClick={onClick}>
      {children}
    </StyledButton>
  );
}

import React, { ReactNode } from "react";
import styled, { css } from "styled-components";

interface IButton {
  children: ReactNode;
  size?: string;
  btntype?: string;
  onClick?: any;
  type?: any
}

const StyledButton = styled.button<{
  size?: string;
  btntype?: string;
  type?: string
}>`
  border: 0;
  padding: 5px 15px;
  border-radius: 5px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  font-weight: 600;

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
      background-color: #3483fa;
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
    ${({ btntype }) =>
    btntype === "outline-green" &&
    css`
      background-color: #fff;
      color: #00a650;
      border: 1px solid #00a650;
      font-weight: 600;
      padding: 2px 5px;
    `}
`;

export default function Button({ children, size, btntype, onClick, type="button" }: IButton) {
  return (
    <StyledButton size={size} btntype={btntype} type={type} onClick={onClick}>
      {children}
    </StyledButton>
  );
}

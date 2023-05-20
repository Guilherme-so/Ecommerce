import React from "react";
import styled, { css } from "styled-components";

interface TInput {
  id: string, 
  size:string, 
  desativo?: boolean, 
  value: string, 
  onChange: React.ChangeEventHandler<HTMLInputElement>,
  onBlur?:React.FocusEventHandler<HTMLInputElement>
  required?: boolean
}

export const StyledInput = styled.input<{
  largura: string;
  disabled?: boolean;
}>`
  background-color: white;
  border: 1px solid #dadada;

  ${({ disabled }) =>
    disabled === true &&
    css`
      background-color: #eeeaea;
      cursor: not-allowed;
      border: 2px dashed #dadada;
    `}

  border-radius: 6px;
  height: 50px;
  padding-left: 10px;
  font-size: 1rem;
  ${({ largura }) =>
    largura === "medium" &&
    css`
      width: 400px;
    `};
  ${({ largura }) =>
    largura === "small" &&
    css`
      width: 300px;
    `};

  :focus {
    border: 2px solid #5585fa;
    outline: none;
  }
`;

export default function Input({ id, size, desativo = false, value, onChange,onBlur,required }:TInput) {
  return (
    <StyledInput
      type="text"
      id={id}
      largura={size}
      disabled={desativo}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      required={required}
    />
  );
}

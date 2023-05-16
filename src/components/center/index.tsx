import React, { ReactNode } from "react";
import { styled } from "styled-components";

interface ICenter {
  children: ReactNode;
}

const CenterDiv = styled.div`
  max-width: 800px;
  justify-content: space-between;
  margin: auto;
`;

export default function Center({ children }: ICenter) {
  return <CenterDiv>{children}</CenterDiv>;
}

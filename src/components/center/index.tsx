import React, { ReactNode } from "react";
import styled from "styled-components";

interface ICenter {
  children: ReactNode;
}

const CenterDiv = styled.div`
  max-width: 80%;
  justify-content: space-between;
  margin: 0 auto;

  @media screen and (max-width: 700px) {
    max-width: 100%;
  }
`;

export default function Center({ children }: ICenter) {
  return <CenterDiv>{children}</CenterDiv>;
}

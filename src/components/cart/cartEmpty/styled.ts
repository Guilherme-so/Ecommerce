import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 40px;
  color: #fff;
  margin: 40px;
  margin-top: 114px;
`;

export const EmptyCart = styled.div`
  background-color: #f5f5f5;
  height: 400px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

  h3 {
    color: #200c20;
  }
  p {
    color: #7b8ea3;
  }
`;

export const CompraEmpty = styled.div`
  background-color: #f5f5f5;
  color: #dadada;
  border-radius: 10px;
  height: 200px;

  h2 {
    margin: 25px 30px;
  }

  hr {
    color: #dadada;
    opacity: 0.5;
  }

  p {
    margin: 30px;
  }
`;

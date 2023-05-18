import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 40px;
  color: #fff;
  margin: 40px;
  margin-top: 114px;
`;

export const Cart = styled.div`
  background-color: #fff;
  height: 400px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;

  h2 {
    color: #000;
    opacity: 0.8;
    margin: 15px 30px;
    font-size: 1.5rem;
  }

  hr {
    color: #dadada;
    opacity: 0.5;
  }

`;

export const Compra = styled.div`
  background-color: #fff;
  border-radius: 10px;
  height: 280px;

  h2 {
    color: #000;
    opacity: 0.8;
    margin: 15px 30px;
    font-size: 1.5rem;
  }

  hr {
    color: #dadada;
    opacity: 0.5;
  }
`;

export const CompraInfo = styled.div`
  margin: 15px 30px;
  display: flex;
  flex-direction: column;
  gap: 15px;

  .produto {
    color: #000;
    display: flex;
    justify-content: space-between;

    p {
      font-size: small;
    }

    span {
      font-size: smaller;
    }
  }

  .frete {
    color: #000;
    display: flex;
    justify-content: space-between;

    p {
      font-size: small;
    }

    span {
      font-size: smaller;
      color: #00a650;
    }
  }

  .cupom {
    font-size: small;
    color: #3483fa;
    font-weight: 600;
  }
  .total {
    color: #000;
    display: flex;
    justify-content: space-between;

    p {
      font-size: normal;
      font-weight: 600;
    }

    span {
      font-size: normal;
      font-weight: 600;
    }
  }
  .compra {
    margin-top: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

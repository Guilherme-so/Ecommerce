import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 40px;
  color: #fff;
  margin: 40px;
  margin-top: 114px;

  @media screen and (max-width: 700px) {
    grid-template-columns: 1fr;
    margin: 20px;
    margin-top: 94px;
  }
`;

export const Cart = styled.div`
  background-color: #fff;
  min-height: 400px;
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

  @media screen and (max-width: 700px) {
    min-height: 250px;

    h2 {
      opacity: 0.7;
      margin: 15px 30px;
      font-size: 1.2rem;
    }
  }
`;

export const CartWrapper = styled.div`
  color: #000;
`;

export const CartProduct = styled.div`
  margin: 20px 20px 30px 20px;
  display: flex;
  gap: 20px;

  .wrapper {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  @media screen and (max-width: 700px) {
    margin: 10px 10px 20px 10px;
    gap: 10px;

    .wrapper {
      flex-direction: column;

    }
  }
`;

export const ImgContainer = styled.div`
  margin: 0px 20px;

  @media screen and (max-width: 700px) {
    margin: 0px 10px;
  }
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  h4 {
    opacity: 0.8;
  }

  button {
    border: none;
    background-color: unset;
    font-weight: 600;
    color: #5585fa;
    cursor: pointer;
  }

  @media screen and (max-width: 700px) {
    gap: 10px;

    h4 {
      font-size: small;
    }
  }
`;

export const Quantity = styled.div`
  display: flex;
  border: 1px solid #dadada;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  height: 30px;
  width: 120px;
  border-radius: 5px;

  button {
    margin: 0;
    padding: 0;
    border: none;
    background-color: unset;
    font-size: 1.3rem;
    color: #5585fa;
    cursor: pointer;
  }

  @media screen and (max-width: 700px) {
    padding: 5px;
    width: 100px;
    border-radius: 5px;

    button {
      font-size: 1.1rem;
    }
  }
`;

export const Price = styled.div`
  span {
    font-size: 1.3rem;
    font-weight: 400;
    opacity: 0.9;
  }

  @media screen and (max-width: 700px) {
    display: flex;
    margin-left: auto;
    translate: 0px 15px;
    span {
      font-size: 1rem;
      opacity: 0.9;
    }
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

  @media screen and (max-width: 700px) {
    h2 {
      margin: 15px 30px;
      font-size: 1rem;
    }
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

    @media screen and (max-width: 700px) {
      button {
        height: 40px;
        font-size: medium;
      }
    }
  }
`;

import styled from "styled-components";

export const Background = styled.div`
  background-color: #eeeeee;
  color: #000;
  padding: 0px 30px;
  margin-top: 74px;
  display: grid;
  grid-template-columns: 1fr 450px;
  gap: 30px;
  height: 100vh;
`;

export const Entrega = styled.div`
  margin: 55px 20px;

  .enderecoHeading {
    opacity: 0.7;
    margin-bottom: 8px;
  }

  h2 {
    opacity: 0.8;
    margin-bottom: 30px;
  }

  .continuar button {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: auto;
    height: 45px;
    width: 150px;
    margin-top: 30px;
  }
`;

export const EnderecoFilled = styled.div`
  background-color: #f5f5f5;
  padding: 20px;
  border-radius: 6px;
  display: flex;
  gap: 40px;

  .iconWrapper {
    height: 60px;
    width: 60px;
    background-color: #fff;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .infoWrapper {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  .edit {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #3483fa;
    cursor: pointer;
    font-weight: 600;
    opacity: unset;
  }

  h4 {
    opacity: 0.9;
    font-weight: 500;
    margin-bottom: 4px;
  }

  p {
    opacity: 0.6;
    font-size: small;
    margin-bottom: 3px;
  }
`;
export const EnderecoFill = styled.div`
  background-color: #f5f5f5;
  padding: 20px;
  border-radius: 6px;
  display: flex;
  gap: 40px;

  .iconWrapper {
    height: 60px;
    width: 60px;
    background-color: #fff;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .infoWrapper {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  .edit {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .edit > button {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40px;
    width: 100px;
  }

  h2 {
    opacity: 0.7;
    font-weight: 600;
    margin-bottom: 4px;
  }

  h3 {
    opacity: 0.7;
    font-weight: 600;
    margin-bottom: 4px;
  }

  p {
    opacity: 0.6;
    font-size: small;
    margin-bottom: 3px;
  }
`;

export const Checkout = styled.div`
  background-color: #f5f5f5;
  padding: 60px 40px 50px 40px;

  h4 {
    margin-bottom: 20px;
    opacity: 0.7;
  }

  hr {
    color: #dadada;
    opacity: 0.5;
    margin-bottom: 20px;
  }
`;

export const Produtos = styled.div`
  display: flex;
  justify-content: space-between;
  opacity: 0.8;
`;
export const Frete = styled.div`
  display: flex;
  justify-content: space-between;
  opacity: 0.8;
  margin-top: 15px;
  margin-bottom: 15px;
`;

export const Total = styled.div`
  display: flex;
  justify-content: space-between;
  opacity: 0.8;
`;

import styled from "styled-components";

export const Container = styled.div`
  margin: 40px;
  margin-top: 114px;
  height: 80vh;

  @media screen and (max-width: 700px) {
    margin: 10px;
    margin-top: 84px;
  }
`;

export const Breadcrumbs = styled.div`
  display: flex;
  align-items: center;
  gap: 7px;
  font-size: 14px;
  margin-bottom: 10px;

  button {
    background-color: unset;
    border: none;
    font-size: 14px;
    cursor: pointer;
    opacity: 0.7;

    :hover {
      color: #3483fa;
    }
  }

  span {
    opacity: 0.2;
  }

  .active {
    background-color: unset;
    color: #3483fa;
    border: none;
    font-size: 14px;
    cursor: pointer;
    opacity: 0.9;
  }
`;

export const ProductContainer = styled.div`
  background-color: #fff;
  padding: 15px;
  border-radius: 10px;
  min-height: 500px;
  width: 100%;
  display: grid;
  grid-template-columns: 1.3fr 2fr;
  gap: 18px;

  @media screen and (max-width: 700px) {
    grid-template-columns: 1fr;
    padding: 15px;
  }
`;

export const ImagesContainer = styled.div`
  display: flex;
  gap: 30px;

  @media screen and (max-width: 700px) {
    gap: 5px;
  }
`;

export const ImageList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;

  div {
    padding: 8px;
    border: 1px solid #dadada;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  .active {
    border: 1px solid #3483fa;
  }
`;

export const MainImage = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  max-width: 300px;
  max-height: 400px;
  width: 100%;
  height: 100%;
  margin: 40px 0px;

  @media screen and (max-width: 700px) {
    margin: 40px 0px;
  }
`;

export const InfoContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 309px;

  @media screen and (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;

export const LeftSide = styled.div`
  padding: 40px 0px;
  position: relative;

  h1 {
    -webkit-flex: auto;
    flex: auto;
    font-size: 22px;
    margin-bottom: 15px;
    margin-right: 28px;
    padding: 0;
  }

  .price {
    font-size: 36px;
    font-weight: 100;
    opacity: 0.8;

    @media screen and (max-width: 700px) {
      font-size: 20px;
    }
  }

  .desc {
    h4 {
      opacity: 0.8;
      margin-bottom: 5px;
    }
    p {
      font-size: small;
      opacity: 0.7;
    }
  }

  .parcela {
    margin-top: 2px;
    span {
      color: #35a751;
      font-weight: 500;
      font-size: 18px;
    }

    @media screen and (max-width: 700px) {
      span {
        font-size: 16px;
      }
    }
  }

  .properties {
    margin-top: 20px;
    margin-bottom: 20px;

    @media screen and (max-width: 700px) {
      margin-top: 10px;
      margin-bottom: 10px;
    }
  }

  .property {
    margin-bottom: 14px;
    div {
      display: flex;
      align-items: center;
      gap: 10px;
      p {
        font-size: large;
        opacity: 0.7;
      }
      span {
        opacity: 1;
        font-weight: 500;
        font-size: 20px;
      }
    }
    .box {
      border: 2px solid #3983f5;
      display: block;
      width: min-content;
      padding: 7px 15px;
      border-radius: 7px;
      opacity: 0.8;
      font-size: small;
      margin-top: 4px;
      cursor: pointer;
    }
  }

  @media screen and (max-width: 700px) {
    margin-bottom: 10px;

    div {
      align-items: center;
      gap: 10px;
      p {
        font-size: medium;
      }
      span {
        opacity: 1;
        font-weight: 300;
        font-size: 10px;
      }
    }
  }
`;

export const Like = styled.div`
  background-color: rgba(255, 255, 255, 0.7);
  position: absolute;
  top: 5px;
  right: 30px;
  align-items: center;
  justify-content: center;
  display: flex;
  padding: 8px 6px 4px 6px;
  border-radius: 50%;
  cursor: pointer;

  @media screen and (max-width: 700px) {
    top: 36px;
    right: 20px;
  }
`;

export const RightSide = styled.div`
  border: 1px solid #dadada;
  height: 300px;
  border-radius: 8px;
  padding: 30px 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  .top {
    display: flex;
    flex-direction: column;
    justify-content: baseline;
    margin-right: auto;
    gap: 20px;

    h4 {
      opacity: 0.7;
    }

    .quantidade {
      display: flex;
      gap: 10px;
      p {
        opacity: 0.5;
      }
      span {
        opacity: 0.7;
      }
    }
  }

  .buttonsWrapper {
    width: 270px;
    display: flex;
    gap: 10px;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    button {
      align-items: center;
      justify-content: center;
      height: 50px;
      width: 100%;
    }
  }

  @media screen and (max-width: 700px) {
    padding: 25px 15px;
    height: 250px;

    .top {
      gap: 10px;

      .quantidade {
        gap: 10px;
      }
    }

    .buttonsWrapper {
      max-width: 250px;
      width: 100%;

      button {
        height: 40px;
        width: 100%;
        padding: 5px 0px;
      }
    }
  }
`;

import styled from "styled-components";

export const Background = styled.div`
  background-color: #222;
  display: block;
  width: 100%;
  color: #fff;
  padding: 50px 20px;
  margin-top: 74px;

  @media screen and (max-width: 700px) {
    margin-top: 54px;
  }
`;

export const Wapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  height: 300px;
  width: 100%;

  img {
    max-width: 100%;
    max-height: 400px;
    height: 100%;
  }

  @media screen and (max-width: 700px) {
    display: flex;
    gap: 20px;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .img {
      order: -1;
      margin-top: 10px;
      overflow: hidden;
      border-radius: 5px;
    }
  }
`;

export const Column = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 700px) {
    .main {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  }
`;

export const Title = styled.h1`
  color: #fff;
  font-size: 3rem;

  @media screen and (max-width: 700px) {
    font-size: 1.5rem;
  }

`;
export const Description = styled.p`
  color: #aaa;
  font-size: 0.8rem;
  margin-top: 10px;

  @media screen and (max-width: 700px) {
    max-width: 300px;
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 20px;

  @media screen and (max-width: 700px) {
   button {
    height: 30px;
    font-size: x-small;
   }
  }
`;

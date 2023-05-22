import styled from "styled-components";

export const Background = styled.div`
  background-color: #222;
  color: #fff;
  padding: 50px 20px;
  margin-top: 74px;
`;

export const Wapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  height: 300px;

  img {
    max-width: 100%;
    max-height: 400px;
    height: 100%;
  }
`;

export const Column = styled.div`
  display: flex;
  align-items: center;
`;


export const Title = styled.h1`
  color: #fff;
  font-size: 3rem;
`;
export const Description = styled.p`
  color: #aaa;
  font-size: 0.8rem;
`;

export const ButtonsWrapper = styled.div`
display: flex;
gap: 10px;
margin-top: 15px;
`

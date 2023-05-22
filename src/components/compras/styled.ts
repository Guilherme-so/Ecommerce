import styled from "styled-components";

export const Container = styled.div`
  margin: 155px;
  margin-top: 114px;

  h2 {
    opacity: 0.8;
    margin-bottom: 40px;
  }
`;
export const CompraDetails = styled.div`
  width: 100%;
  height: 200px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 1px 1px 1px 2px rgba(0, 0, 0, 0.05);
  margin-bottom: 20px;

  h5 {
    opacity: 0.8;
    padding: 15px 30px;
  }

  hr {
    opacity: 0.3;
  }

  .empty{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;
    padding: 30px 0px;

    h1 {
      font-size: xx-large;
      opacity: .8;
    }
  }
`;

export const ComprasWrapper = styled.div`
  display: flex;
  padding: 20px;
`;
export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin-right: 15px;
  border: 1px solid #dadada;
  border-radius: 5px;
  padding: 5px 10px;
`;

export const DetailsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 170px;
  height: 50px;
}
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  justify-content: space-between;

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-size: small;
    opacity: 0.7;
  }
`;

import styled from "styled-components";

export const Card = styled.div`
  background-color: white;
  position: relative;
  overflow: hidden;
  width: 224px;
  height: 350px;
  display: flex;
  flex-direction: column;
  border-radius: 5px;

  @media screen and (max-width: 700px) {
    max-width: 200px;
    width: 100%;
    height: 250px;
  }

  :hover {
    .title {
      display: flex;
    }
    .like {
      svg {
        display: flex;
      }
    }
    -webkit-box-shadow: -2px 2px 16px -1px rgba(0, 0, 0, 0.76);
    -moz-box-shadow: -2px 2px 16px -1px rgba(0, 0, 0, 0.76);
    box-shadow: -2px 2px 16px -1px rgba(0, 0, 0, 0.76);
  }
`;

export const ImageWrapper = styled.div`
  background-color: white;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px auto;
  border-bottom: 1px solid #c4baba;
  cursor: pointer;
  max-height: 200px;
  height: 100%;
  max-width: 200px;
  width: 100%;

    @media screen and (max-width: 600px) {
    max-width: 200px;
    width: 100%;
    margin: 10px auto;

  }
`;

export const CardFooter = styled.div`
  padding: 15px 20px 10px 20px;
`;

export const PriceInfo = styled.div`
  display: flex;
  align-items: center;
  margin-top: 3px;
  margin-left: 7px;

  span {
    font-size: 1.3rem;
    font-weight: 500;
    opacity: 0.7;
    cursor: pointer;
  }
`;

export const ParcelaInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 4px;

  .first {
    color: #00a650;
    margin-top: 7px;
    font-size: 0.8rem;
    font-weight: 500;
    opacity: 0.7;
  }

  .second {
    color: #00a650;
    margin-top: 3px;
    font-size: 0.9rem;
    font-weight: 600;
    opacity: 0.8;
  }
`;

export const Title = styled.p`
  display: none;
  font-size: 0.9rem;
  margin-top: 15px;
  margin-left: 3px;
  font-weight: 400;
  opacity: 0.5;
  cursor: pointer;
`;

export const Like = styled.div`
  display: flex;
  background-color: rgba(255, 255, 255, 0.7);
  position: absolute;
  top: 15px;
  right: 15px;
  align-items: center;
  justify-content: center;
  display: flex;
  padding: 8px 6px 4px 6px;
  border-radius: 50%;
  cursor: pointer;
  z-index: 1;

  svg {
    display: none;
  }
`;

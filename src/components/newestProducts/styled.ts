import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  justify-content: center;
  gap: 40px;
  margin: 40px;
  scroll-margin-top: +100px;

  @media screen and (max-width: 600px) {
   grid-template-columns: 1fr 1fr ;
   align-items: center;
   justify-content: center;
   margin: 30px 10px;
   gap: 15px;
  }
`;

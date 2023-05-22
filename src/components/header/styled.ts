import styled from "styled-components";
import Link from "next/link";

export const Container = styled.div`
  background-color: #fff159;
  padding: 20px;
  position: fixed;
  top: 0;
  z-index: 999;
  width: 100%;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled(Link)`
  color: #474637;
  text-decoration: none;
  font-size: large;
  font-weight: 600;
`;

export const NavStyled = styled.nav`
  display: flex;
  gap: 10px;
  align-items: center;
`;

export const NavLink = styled(Link)<{ cartlength?: boolean }>`
  position: relative;
  text-decoration: none;
  color: #474637;
  position: relative;

  span {
    svg {
      translate: 2px 4px;
      rotate: 90deg;
    }
  }

  .cart {
    translate: 0px -2px;
  }

  .count {
    position: absolute;
    top: 10px;
    left: ${({ cartlength }) => (cartlength ? "9px" : "13px")};
    /* left: 13px; */
    color: #474637;
    font-size: x-small;
    font-weight: bold;
  }

  .favoritos {
    position: absolute;
    top: 41px;
    right: 0px;
    background: white;
    width: 400px;
    border-radius: 4px;
    -webkit-box-shadow: 0px 6px 12px 0px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 6px 12px 0px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 6px 12px 0px rgba(0, 0, 0, 0.75);

    h2 {
      margin: 10px 30px;
    }

    .test {
      overflow: hidden;
      height: 180px;
      overflow-y: hidden;
      overflow-y: scroll;

      ::-webkit-scrollbar {
        width: 10px;
      }

      /* Track */
      ::-webkit-scrollbar-track {
        background: none;
      }

      /* Handle */
      ::-webkit-scrollbar-thumb {
        background: #dadada;
        border-radius: 2px;
      }
    }

    .carot {
      border: 9px solid transparent;
      border-bottom-color: white;
      position: absolute;
      top: -17px;
      right: 20px;
    }

    h2 {
      font-size: medium;
      margin-bottom: 5px;
    }

    hr {
      opacity: 0.5;
    }
  }
`;

export const Products = styled.div`
  display: flex;
  margin-top: 20px;
  margin-bottom: 10px;
`;

export const ImageContainer = styled.div`
  padding: 5px 20px;
`;

export const Info = styled.div`
  h1 {
    font-size: medium;
    margin-bottom: 7px;
  }

  .price {
    font-size: 20px;
    font-weight: 100;
    opacity: 0.8;
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
  }
`;

export const VerTodos = styled.div`
  width: 100%;
  display: flex;
  height: 40px;
  align-items: center;
  justify-content: center;
  -webkit-box-shadow: 0px 6px 12px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 6px 12px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 6px 12px 0px rgba(0, 0, 0, 0.75);

`;

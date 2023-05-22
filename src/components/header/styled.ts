import styled from "styled-components";
import Link from "next/link";

export const Container = styled.div`
  background-color: #fff159;
  padding: 0px 20px;
  position: fixed;
  top: 0;
  z-index: 999;
  width: 100%;
`;

export const TopHeader = styled.div`
  height: 50px;
  margin-top: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  .search {
    display: flex;
    position: relative;
    max-width: 500px;
    width: 100%;
    height: 40px;
    align-items: center;
    box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.06);
    margin-right: 40px;

    input {
      border: none;
      width: 100%;
      height: 100%;
      padding-left: 20px;
      font-size: medium;
      color: gray;
      border-radius: 5px;

      :focus {
        outline: 1px solid black;
      }
    }

    .icon {
      position: absolute;
      right: 20px;
      cursor: pointer;
    }

    ::after {
      content: "";
      display: inline-flex;
      position: absolute;
      right: 50px;
      z-index: 999;
      background-color: #dadada;
      width: 1px;
      height: 25px;
    }

    .result {
      position: absolute;
      width: 100%;
      background-color: #fff;
      border-radius: 5px;
      height: 200px;
      z-index: 999;
      top: 44px;
      box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.06);
      padding: 5px 0;
      overflow: hidden;
      overflow-y: scroll;
      display: none;
      flex-direction: column;

      .resultItem {
        display: flex;
        gap: 10px;
        padding: 4px 15px;
        cursor: pointer;

        :hover {
          background-color: #3983f5;
          color: #fff;
        }

        svg {
          opacity: 0.3;
          :hover {
            fill: #fff;
            color: #fff;
            opacity: 0.7;
          }
        }
      }

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
  }
`;

export const Wrapper = styled.div`
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 5px;
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
  font-size: 14px;
  font-weight: 300;
  line-height: 18px;

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
    top: 8px;
    left: ${({ cartlength }) => (cartlength ? "9px" : "12px")};
    color: #474637;
    font-size: x-small;
    font-weight: bold;
  }
  .categories {
    position: absolute;
    top: 30px;
    right: -30px;
    background: #333333;
    width: 240px;
    border-radius: 4px;
    -webkit-box-shadow: 0px 6px 12px 0px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 6px 12px 0px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 6px 12px 0px rgba(0, 0, 0, 0.75);

    .carot {
      border: 9px solid transparent;
      border-bottom-color: #333333;
      position: absolute;
      top: -17px;
      right: 20px;
    }

    h3 {
      display: flex;
      align-items: center;
      padding: 10px 30px;
      color: #fff;
      cursor: pointer;

      :hover {
        background-color: #3983F5;
      }
    }
  }

  .favoritos {
    position: absolute;
    top: 30px;
    right: -15px;
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

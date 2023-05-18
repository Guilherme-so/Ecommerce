import styled from "styled-components";
import Link from "next/link";

export const Container = styled.div`
  background-color: #FFF159;
  padding: 20px;
  position: fixed;
  top: 0;
  z-index: 999;
  width: 100%;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Logo = styled(Link)`
  color: #474637;
  text-decoration: none;
  font-size: large;
`;

export const NavStyled = styled.nav`
  display: flex;
  gap: 10px;
`;

export const NavLink = styled(Link)<{ cartlength?: boolean }>`
  text-decoration: none;
  color: #474637;
  position: relative;

  .cart {
    translate: 0px -8px;
  }

  .count {
    position: absolute;
    top: 4px;
    left: ${({cartlength})=> cartlength ? '9px' : '13px'  };
    /* left: 13px; */
    color: #474637;
    font-size: x-small;
    font-weight: bold;
  }
`;

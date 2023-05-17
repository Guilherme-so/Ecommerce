import { styled } from "styled-components";
import Link from "next/link";

export const Header = styled.header`
  background-color: #222;
  padding: 20px;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Logo = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-size: large;
`;

export const NavStyled = styled.nav`
  display: flex;
  gap: 10px;
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  color: gray;
`;

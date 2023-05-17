import React from "react";
import { Header ,Wrapper, Logo, NavLink, NavStyled } from "./styled";
import Center from "../center";


export default function Navbar() {
  return (
    <Header>
      <Center>
        <Wrapper>
          <Logo href="/">Ecommerce</Logo>
          <NavStyled>
            <NavLink href="/">Home</NavLink>
            <NavLink href="/products">All Products</NavLink>
            <NavLink href="/categories">Categories</NavLink>
            <NavLink href="/account">Account</NavLink>
            <NavLink href="/cart">Cart (0)</NavLink>
          </NavStyled>
        </Wrapper>
      </Center>
    </Header>
  );
}

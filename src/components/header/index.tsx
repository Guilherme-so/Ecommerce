import React from "react";
import { Container, Wrapper, Logo, NavLink, NavStyled } from "./styled";
import Center from "../center";
import { Handbag } from "phosphor-react";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

export default function Navbar() {
  const cart = useSelector((state: RootState) => state.cart.value);

  return (
    <Container>
      <Center>
        <Wrapper>
          <Logo href="/">Gui-commerce</Logo>
          <NavStyled>
            <NavLink href="/">Home</NavLink>
            <NavLink href="/products">All Products</NavLink>
            <NavLink href="/categories">Categories</NavLink>
            <NavLink href="/account">Account</NavLink>
            <NavLink href="/cart" cartlength={cart.length > 9 ? true : false}>
              <Handbag size={30} className="cart" color="#474637" />
              <span className="count">{cart.length}</span>
            </NavLink>
          </NavStyled>
        </Wrapper>
      </Center>
    </Container>
  );
}

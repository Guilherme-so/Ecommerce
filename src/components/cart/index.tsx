import React from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import CartEmpty from "./cartEmpty/cartEmpty";
import { Cart, Compra, CompraInfo, Container } from "./styled";
import Button from "../buttons";

export default function CartItens() {
  const router = useRouter();
  const cart = useSelector((state: RootState) => state.cart.value);

  return (
    <>
      {cart.length === 0 ? (
        <CartEmpty />
      ) : (
        <Container>
          <Cart>
            <h2>Produtos</h2>
            <hr />
          </Cart>

          <Compra>
            <h2>Resumo da compra</h2>
            <hr />
            <CompraInfo>
              <div className="produto">
                <p>Produto</p> <span>R$ 600</span>
              </div>
              <div className="frete">
                <p>Frete</p> <span>Grátis</span>
              </div>
              <span className="cupom">Inserir código do cupom</span>
              <div className="total">
                <span>Total</span>
                <span>R$ 600</span>
              </div>
              <div className="compra">
                <Button size="large" btntype="primary">
                  Continuar a compra
                </Button>
              </div>
            </CompraInfo>
          </Compra>
        </Container>
      )}
    </>
  );
}

import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { Container, EmptyCart, CompraEmpty } from "./styled";
import Button from "../../buttons";

export default function CartEmpty() {
  const router = useRouter();

  return (
    <Container>
      <EmptyCart>
        <Image
          src="/images/paperbag.svg"
          alt="carrinho de compras"
          height={50}
          width={50}
        />
        <h3>Monte um carrinho de compras!</h3>
        <p>Adicione produtos e tenha frete grátis.</p>
        <Button
          onClick={() => router.push("/#products")}
          size="large"
          btntype="primary"
        >
          Conferir produtos
        </Button>
      </EmptyCart>

      <CompraEmpty>
        <h2>Resumo da compre</h2>
        <hr />
        <p>
          Aqui, você encontrará os valores da sua compra assim que adicionar
          produtos.
        </p>
      </CompraEmpty>
    </Container>
  );
}

import React from "react";
import { Container, Products } from "./styles";
import Cardbox from "../newestCard";
import Center from "../center";

export default function ProductsByCategory({ products, name }) {
  return (
    <Center>
      <Container>
        <h2>{name && name}</h2>
        <Products>
          {products?.map((prod, index) => (
            <Cardbox product={prod} key={index} />
          ))}
        </Products>
      </Container>
    </Center>
  );
}

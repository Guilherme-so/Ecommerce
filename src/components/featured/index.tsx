import React from "react";
import { useRouter } from "next/router";
import {
  Background,
  Wapper,
  Description,
  Column,
  ButtonsWrapper,
  Title,
} from "./styled";
import Center from "../center";
import Button from "../buttons";
import { ShoppingCartSimple } from "phosphor-react";

import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/features/cart/cartSlice";

export default function Featured({ product }) {
  const router = useRouter();
  const dispatch = useDispatch();

  return (
    <Background>
      <Center>
        <Wapper>
          <Column>
            <div className="main">
              <Title>{product.title}</Title>
              <Description>{product.description}</Description>
              <ButtonsWrapper>
                <Button
                  onClick={() => router.push(`/product/${product._id}`)}
                  btntype="outline"
                  size="large"
                >
                  Read More
                </Button>
                <Button
                  onClick={() => dispatch(addToCart(product._id))}
                  btntype="yellow"
                  size="large"
                >
                  <ShoppingCartSimple weight="fill" />
                  Add to cart
                </Button>
              </ButtonsWrapper>
            </div>
          </Column>
          <Column className="img">
            <img src={product.images[1]} alt={product.title} />
          </Column>
        </Wapper>
      </Center>
    </Background>
  );
}

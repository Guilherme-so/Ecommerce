import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import {
  Card,
  CardFooter,
  ImageWrapper,
  Like,
  ParcelaInfo,
  PriceInfo,
  Title,
} from "./styled";
import Button from "../buttons";
import { Heart } from "phosphor-react";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/features/cart/cartSlice";

export default function Cardbox({ product }) {
  const router = useRouter();
  const dispatch = useDispatch();

  function goToProduct() {
    router.push(`/product/${product._id}`);
  }

  function handleLike() {
    console.log("like");
  }

  return (
    <Card>
      <Like className="like" onClick={handleLike}>
        <Heart color="#3483fa" size={32} />
      </Like>
      <ImageWrapper onClick={goToProduct}>
        <Image
          src={product.images[0]}
          alt={product.title}
          height={200}
          width={200}
        />
      </ImageWrapper>
      <CardFooter>
        <PriceInfo>
          <span onClick={goToProduct}>R$ {product.price}</span>
          <Button
            onClick={() => dispatch(addToCart(product._id))}
            btntype="outline-green"
          >
            Add to cart
          </Button>
        </PriceInfo>
        <ParcelaInfo>
          <span className="first">10x R$ {product.price} sem juros</span>
          <span className="second">Frete grátis</span>
        </ParcelaInfo>
        <Title className="title" onClick={goToProduct}>
          {product.title.length > 20
            ? `${product.title.substring(0, 20)}...`
            : product.title}
        </Title>
      </CardFooter>
    </Card>
  );
}

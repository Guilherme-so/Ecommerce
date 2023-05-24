import React, { useEffect, useState } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { addToCart } from "@/redux/features/cart/cartSlice";
import {
  addToFavorites,
  removeToFavorites,
} from "@/redux/features/favorites/favoritesSlice";

export default function Cardbox({ product }) {
  const router = useRouter();
  const dispatch = useDispatch();
  const favorites = useSelector((state: RootState) => state.favorites.value);
  const [isLiked, setIsLiked] = useState(false);

  function goToProduct() {
    router.push(`/product/${product._id}`);
  }

  useEffect(() => {
    if (favorites.includes(product._id)) {
      setIsLiked(true);
    } else {
      setIsLiked(false);
    }
  }, [favorites, product._id]);

  return (
    <Card>
      <Like className="like">
        {isLiked ? (
          <Heart
            onClick={() => {
              dispatch(removeToFavorites(product._id));
            }}
            size={32}
            weight="fill"
            color="#3483fa"
          />
        ) : (
          <Heart
            onClick={() => dispatch(addToFavorites(product._id))}
            color="#3483fa"
            size={32}
          />
        )}
      </Like>
      <ImageWrapper onClick={goToProduct}>
        <Image
          src={product.images[0]}
          alt={product.title}
          fill
          style={{objectFit:'contain'}}
        />
      </ImageWrapper>
      <CardFooter>
        <PriceInfo>
          <span onClick={goToProduct}>
            {product.price.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </span>
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

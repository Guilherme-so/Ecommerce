import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

import {
  Breadcrumbs,
  Container,
  ImageList,
  ImagesContainer,
  InfoContainer,
  LeftSide,
  Like,
  MainImage,
  ProductContainer,
  RightSide,
} from "./styled";
import Image from "next/image";
import Button from "../buttons";
import { addToCart } from "@/redux/features/cart/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { Heart } from "phosphor-react";
import {
  addToFavorites,
  removeToFavorites,
} from "@/redux/features/favorites/favoritesSlice";
import Footer from "../footer";

export default function ProductById({ product, category, parentCategory }) {
  const router = useRouter();
  const dispatch = useDispatch();
  const favorites = useSelector((state: RootState) => state.favorites.value);

  const [bigImage, setBigImage] = useState(product.images[0]);
  const [properties, setProperties] = useState([]);
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    if (product.properties !== undefined) {
      for (const [key, value] of Object.entries(product.properties)) {
        setProperties((prev) => {
          const newProperties = [...prev];
          const obj = {
            key: key,
            value: value,
          };
          if (!newProperties.includes(key)) {
            newProperties.push(obj);
          }
          return newProperties;
        });
      }
    }
  }, [product.properties]);

  useEffect(() => {
    if (favorites.includes(product._id)) {
      setIsLiked(true);
    } else {
      setIsLiked(false);
    }
  }, [favorites, product._id]);

  useEffect(() => {
    setBigImage(product.images[0]);
  }, [product]);

  return (
    <>
      <Container>
        <Breadcrumbs>
          <button onClick={() => router.push("/#products")}>Voltar</button>
          <span>|</span>
          <button className="active">{category.name}</button>
          {parentCategory && <span>&gt;</span>}
          <button className="active">{parentCategory?.name ?? null}</button>
        </Breadcrumbs>
        <ProductContainer>
          <ImagesContainer>
            <ImageList>
              {product?.images.map((image) => (
                <div
                  key={image}
                  className={bigImage === image && "active"}
                  onMouseOver={() => setBigImage(image)}
                >
                  <Image src={image} alt={image} height={40} width={35} />
                </div>
              ))}
            </ImageList>
            <MainImage>
              <Image
                src={bigImage}
                alt={bigImage}
                fill
                style={{ objectFit: "contain" }}
              />
            </MainImage>
          </ImagesContainer>
          <InfoContainer>
            <LeftSide>
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
              <h1>{product.title}</h1>
              <div>
                <span className="price">
                  {product.price.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </span>
                <div>
                  <p className="parcela">
                    em{" "}
                    <span>
                      10x{" "}
                      {(product.price / 10).toLocaleString("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                      })}{" "}
                    </span>
                    <span>sem juros</span>
                  </p>
                </div>
                <div className="properties">
                  {properties?.map((property, index) => (
                    <div className="property" key={index}>
                      <div>
                        <p>{property.key}:</p> <span>{property.value}</span>
                      </div>
                      <div className="box">{property.value}</div>
                    </div>
                  ))}
                </div>
                <div className="desc">
                  <h4>O que você precisa saber sobre este produto</h4>
                  <p>{product.description}</p>
                </div>
              </div>
            </LeftSide>
            <RightSide>
              <div className="top">
                <h4>Estoque disponível</h4>
                <div className="quantidade">
                  <p>Quantidade:</p> <span>100 unidades</span>
                </div>
              </div>
              <div className="buttonsWrapper">
                <Button
                  onClick={() => {
                    dispatch(addToCart(product._id));
                    router.push("/checkout");
                  }}
                  btntype="primary"
                  size="large"
                >
                  Comprar agora
                </Button>
                <Button
                  onClick={() => dispatch(addToCart(product._id))}
                  btntype="secondary"
                  size="large"
                >
                  Adicionar ao carrinho
                </Button>
              </div>
            </RightSide>
          </InfoContainer>
        </ProductContainer>
      </Container>
    </>
  );
}

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/redux/store";
import Center from "../center";
import { Handbag } from "phosphor-react";
import ChevronRight from "../icons/chevronRight";
import {
  Container,
  Wrapper,
  Logo,
  NavLink,
  NavStyled,
  Products,
  ImageContainer,
  Info,
  VerTodos,
} from "./styled";
import Image from "next/image";
import Button from "../buttons";
import { removeToFavorites } from "@/redux/features/favorites/favoritesSlice";

export default function Navbar() {
  const cart = useSelector((state: RootState) => state.cart.value);
  const favorites = useSelector((state: RootState) => state.favorites.value);
  const dispatch = useDispatch();
  const [openFavoritos, setOpenFavoritos] = useState(false);
  const [products, setProducts] = useState([]);

  console.log(products);

  const fetchFavorites = async () => {
    const data = {
      favorites: favorites ?? favorites,
    };
    const resp = await axios.post("/api/favorites", data);
    setProducts(resp.data);
  };

  useEffect(() => {
    fetchFavorites();
  }, [favorites]);

  return (
    <Container>
      <Center>
        <Wrapper>
          <Logo href="/">ARGO</Logo>
          <NavStyled>
            <NavLink href="/account">Account</NavLink>
            <NavLink href="/products">All Products</NavLink>
            <NavLink href="/categories">Categories</NavLink>
            <NavLink href="#" onMouseMove={() => setOpenFavoritos(true)}>
              Favoritos
              <span>
                <ChevronRight />
              </span>
              {openFavoritos && (
                <div
                  className="favoritos"
                  onMouseLeave={() => setOpenFavoritos(false)}
                >
                  <span className="carot"></span>
                  <h2>Favoritos</h2>
                  <hr />
                  <div className="test">
                    {products?.map((product) => (
                      <Products key={product._id}>
                        <ImageContainer>
                          <Image
                            src={product.images[0]}
                            alt={product.title}
                            height={50}
                            width={50}
                          />
                        </ImageContainer>
                        <Info>
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
                                  {(product.price / 10).toLocaleString(
                                    "pt-BR",
                                    {
                                      style: "currency",
                                      currency: "BRL",
                                    }
                                  )}{" "}
                                </span>
                                <span>sem juros</span>
                              </p>
                            </div>
                            <Button
                              onClick={() => {
                                dispatch(
                                  removeToFavorites(product._id.toString())
                                );
                                fetchFavorites();
                              }}
                              btntype="outline-white"
                            >
                              Remover
                            </Button>
                          </div>
                        </Info>
                      </Products>
                    ))}
                  </div>
                  {products.length > 0 && (
                    <VerTodos>
                      <h3>Ver todos</h3>
                    </VerTodos>
                  )}
                </div>
              )}
            </NavLink>
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

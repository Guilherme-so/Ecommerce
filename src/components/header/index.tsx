import React, { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/redux/store";
import { removeToFavorites } from "@/redux/features/favorites/favoritesSlice";
import Center from "../center";
import { Handbag, MagnifyingGlass } from "phosphor-react";
import ChevronRight from "../icons/chevronRight";
import Button from "../buttons";
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
  TopHeader,
  ButtonLink,
} from "./styled";
import { useRouter } from "next/router";

export default function Navbar() {
  const router = useRouter();
  const dispatch = useDispatch();
  const cart = useSelector((state: RootState) => state.cart.value);
  const favorites = useSelector((state: RootState) => state.favorites.value);
  const address = useSelector((state: RootState) => state.address.value);
  const [openFavoritos, setOpenFavoritos] = useState(false);
  const [openCategories, setOpenCategories] = useState(false);
  const [favProducts, setFavProducts] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [produtos, setProdutos] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const [searchList, setSearchList] = useState([]);
  const [isSearchOpen, setSearchopen] = useState(false);

  const fetchFavorites = useCallback(async () => {
    const data = {
      favorites: favorites ?? favorites,
    };
    const resp = await axios.post("/api/favorites", data);
    setFavProducts(resp.data);
  }, [favorites]);

  useEffect(() => {
    fetchFavorites();
  }, [favorites, fetchFavorites]);

  useEffect(() => {
    const fetchProdutos = async () => {
      const resp = await axios.get("/api/produtos");
      setProdutos(resp.data);
    };
    const fetchCategories = async () => {
      const resp = await axios.get("/api/categorias");
      setCategorias(resp.data);
    };
    fetchCategories();
    fetchProdutos();
  }, []);

  const searchItems = useCallback((title: string) => {
    const regex = new RegExp(searchValue, "i");
    return regex.test(title);
  }, [searchValue]);

  useEffect(() => {
    const novaLista = produtos.filter((item) => searchItems(item.title));
    setSearchList(novaLista);
  }, [searchValue, produtos, searchItems]);

  //onBlur styled components
  const searchRef = useRef<HTMLDivElement>();

  useEffect(() => {
    const externalEventHandler = (e: any) => {
      if (!isSearchOpen) return;
      const node = searchRef.current;
      if (node && node.contains(e.target)) {
        return;
      }
      setSearchopen(false);
    };

    if (isSearchOpen) {
      document.addEventListener("click", externalEventHandler);
    } else {
      document.removeEventListener("click", externalEventHandler);
    }
    return () => {
      document.removeEventListener("click", externalEventHandler);
    };
  }, [isSearchOpen]);

  return (
    <Container>
      <Center>
        <TopHeader>
          <Logo href={"/"}>Ecommerce</Logo>
          <div
            className="search"
            ref={searchRef}
            onClick={() => {
              setSearchopen(true);
            }}
          >
            <input
              value={searchValue}
              onChange={(e) => {
                setSearchValue(e.target.value);
              }}
              type="text"
              placeholder="Buscar produtos"
            />
            <MagnifyingGlass className="icon" size={20} />

            <div
              style={isSearchOpen ? { display: "flex" } : {}}
              className="result"
            >
              {searchList?.map((prod) => (
                <div
                  key={prod._id}
                  onClick={(e) => {
                    e.stopPropagation();
                    router.push(`/product/${prod._id}`);
                  }}
                  className="resultItem"
                >
                  <MagnifyingGlass size={20} />
                  <p>{prod.title}</p>
                </div>
              ))}
            </div>
          </div>
          <div></div>
        </TopHeader>

        <Wrapper>
          <NavStyled>
            <ButtonLink onMouseMove={() => setOpenCategories(true)}>
              Categories
              <span>
                <ChevronRight />
              </span>
              {openCategories && (
                <div
                  className="categories"
                  onMouseLeave={() => setOpenCategories(false)}
                >
                  <span className="carot"></span>
                  {categorias?.map((categoria) => (
                    <h3
                      onClick={() => {
                        router.push(`/category/${categoria.name}`);
                        setOpenCategories(false);
                      }}
                      key={categoria._id}
                    >
                      {categoria.name}
                    </h3>
                  ))}
                </div>
              )}
            </ButtonLink>
          </NavStyled>
          <NavStyled>
            <NavLink href="/account">Account</NavLink>
            <NavLink href="/compras">Compras</NavLink>
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
                    {favProducts?.map((product) => (
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

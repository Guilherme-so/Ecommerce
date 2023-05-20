import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import {
  addToCart,
  removeALlEgualProduct,
  removeOneToCart,
} from "@/redux/features/cart/cartSlice";
import CartEmpty from "./cartEmpty/cartEmpty";
import {
  Container,
  Cart,
  CartWrapper,
  CartProduct,
  Compra,
  CompraInfo,
  ImgContainer,
  Description,
  Quantity,
  Price,
} from "./styled";
import Button from "../buttons";

export default function CartItens() {
  const router = useRouter();
  const dispatch = useDispatch();
  const cart = useSelector((state: RootState) => state.cart.value);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (cart.length > 0) {
      const getCartProducts = async () => {
        const data = {
          ids: cart,
        };
        const response = await axios.post("/api/cart", data);
        setProducts(response.data);
      };
      getCartProducts();
    } else {
      setProducts([]);
    }
  }, [cart]);

  let calcCartPrice = 0;
  for (const productId of cart) {
    const price = products.find((p) => p._id === productId)?.price || 0;
    calcCartPrice += price;
  }

  return (
    <>
      {cart.length === 0 ? (
        <CartEmpty />
      ) : (
        <Container>
          <Cart>
            <h2>Produtos</h2>
            <hr />
            {products?.map((product) => (
              <CartWrapper key={product._id}>
                <CartProduct>
                  <ImgContainer>
                    <Image
                      src={product.images[0]}
                      alt={product.title}
                      height={55}
                      width={45}
                    />
                  </ImgContainer>
                  <div className="wrapper">
                    <Description>
                      <h4>{product.title}</h4>
                      <div>
                        <button
                          onClick={() =>
                            dispatch(removeALlEgualProduct(product._id))
                          }
                        >
                          Excluir
                        </button>
                      </div>
                    </Description>

                    <Quantity>
                      <button
                        onClick={() => dispatch(removeOneToCart(product._id))}
                      >
                        -
                      </button>
                      <span>
                        {cart.filter((id) => id === product._id).length}
                      </span>
                      <button onClick={() => dispatch(addToCart(product._id))}>
                        +
                      </button>
                    </Quantity>

                    <Price>
                      <span>R$ {product.price}</span>
                    </Price>
                  </div>
                </CartProduct>
                <hr />
              </CartWrapper>
            ))}
          </Cart>

          <Compra>
            <h2>Resumo da compra</h2>
            <hr />
            <CompraInfo>
              <div className="produto">
                <p>
                  {products?.length === 1
                    ? "Produto"
                    : `Produtos (${products?.length})`}
                </p>
                <span>
                  {calcCartPrice.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </span>
              </div>
              <div className="frete">
                <p>Frete</p> <span>Grátis</span>
              </div>
              <span className="cupom">Inserir código do cupom</span>
              <div className="total">
                <span>Total</span>
                <span>
                  R${" "}
                  {calcCartPrice.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </span>
              </div>
              <div className="compra">
                <Button
                  onClick={() => router.push("/checkout")}
                  size="large"
                  btntype="primary"
                >
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

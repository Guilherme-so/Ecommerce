import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import {
  Background,
  Checkout,
  EnderecoFilled,
  EnderecoFill,
  Entrega,
  Frete,
  Produtos,
  Total,
} from "./styled";
import axios from "axios";
import FormularioEndereco from "../formularioEndereco";
import { MapPinLine } from "phosphor-react";
import Button from "../buttons";

export default function CheckoutProduct() {
  const cart = useSelector((state: RootState) => state.cart.value);
  const address = useSelector((state: RootState) => state.address.value);
  const [products, setProducts] = useState([]);
  const [editar, setEditar] = useState(false);

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
    <Background>
      <Entrega>
        <h2>Escolha forma de entrega</h2>

        {Object.keys(address).length > 0 && editar === false ? (
          <div>
            <h4 className="enderecoHeading">Endereço</h4>
            <EnderecoFilled>
              <div className="iconWrapper">
                <MapPinLine size={32} color="#3483fa" />
              </div>
              <div className="infoWrapper">
                <div>
                  <h4>
                    Rua {address.rua} Bairro {address.bairro}. {address.numero}
                  </h4>
                  <p>
                    {address.cidade}, {address.estado} - CEP {address.cep}
                  </p>
                  <p>
                    {address.nome} - {address.telefone}
                  </p>
                </div>
                <div className="edit" onClick={() => setEditar(true)}>
                  <p>Editar ou escolher outro</p>
                </div>
              </div>
            </EnderecoFilled>
            <div className="continuar">
              <Button btntype="primary">Continuar</Button>
            </div>
          </div>
        ) : Object.keys(address).length > 0 && editar === true ? (
          <FormularioEndereco setEditar={setEditar} />
        ) : editar === true ? (
          <FormularioEndereco setEditar={setEditar} />
        ) : (
          <div>
            <h4 className="enderecoHeading">Novo Endereço</h4>
            <EnderecoFill>
              <div className="iconWrapper">
                <MapPinLine size={32} color="#3483fa" />
              </div>
              <div className="infoWrapper">
                <div>
                  <h2>Primeira véz aqui?</h2>
                  <h3>Preencha O Seu Endereço Para Proceguir!</h3>
                </div>
                <div className="edit">
                  <Button
                    btntype="outline-green"
                    onClick={() => setEditar(true)}
                  >
                    Preencher
                  </Button>
                </div>
              </div>
            </EnderecoFill>
          </div>
        )}
      </Entrega>
      <Checkout>
        <h4>Resumo da compra</h4>
        <hr />

        <Produtos>
          <span>
            {cart.length > 0 ? `Produtos (${cart.length})` : "Produto"}
          </span>
          <span>
            {calcCartPrice.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </span>
        </Produtos>
        <Frete>
          <span>Frete</span>
          <span>-</span>
        </Frete>
        <hr />
        <Total>
          <span>Você pagará</span>
          <span>
            {calcCartPrice.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </span>
        </Total>
      </Checkout>
    </Background>
  );
}

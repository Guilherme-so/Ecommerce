import React, { useEffect, useState } from "react";
import {
  CompraDetails,
  ComprasWrapper,
  Container,
  DetailsWrapper,
  ImageContainer,
  Info,
} from "./styled";
import axios from "axios";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import Image from "next/image";
import Button from "../buttons";

export default function MinhasCompras() {
  const { email } = useSelector((state: RootState) => state.address.value);
  const [compras, setCompras] = useState(null);

  useEffect(() => {
    const fetchCompras = async () => {
      const data = {
        email: email,
      };
      const resp = await axios.post("/api/compras", data);
      setCompras(resp.data);
    };

    fetchCompras();
  }, []);

  if (compras === null || compras.length === 0) {
    return (
      <Container>
        <h2>Compras</h2>
        <CompraDetails>
          <div className="empty">
            <h1>Voce nao tem compras feitas</h1>
            <Button
              onClick={() => (window.location.href = "/#products")}
              btntype="primary"
              size="large"
            >
              Produtos
            </Button>
          </div>
        </CompraDetails>
      </Container>
    );
  }

  return (
    <Container>
      <h2>Compras</h2>

      <CompraDetails>
        {compras?.map((item) => (
          <CompraDetails>
            <h5>14 de abril</h5>
            <hr />
            <ComprasWrapper>
              {item?.line_items.map((lineItem) => (
                <ImageContainer>
                  <Image
                    src={lineItem.price_data.product_data.images[0]}
                    alt={lineItem.price_data.product_data.name}
                    height={74}
                    width={74}
                  />
                </ImageContainer>
              ))}
              <DetailsWrapper>
                <Info>
                  {item.paid === false ? (
                    <p style={{ color: "red" }}>Compra cancelada</p>
                  ) : (
                    <p style={{ color: "green" }}>Compra realizada</p>
                  )}
                  {item?.line_items.map((lineItem) => (
                    <div>
                      <p>{lineItem.price_data.product_data.name}</p>
                      <span>{lineItem.quantity} unidade</span>
                    </div>
                  ))}
                </Info>
                <Button
                  btntype="primary"
                  onClick={() => (window.location.href = "/")}
                >
                  Home
                </Button>
              </DetailsWrapper>
            </ComprasWrapper>
          </CompraDetails>
        ))}
      </CompraDetails>
    </Container>
  );
}

import type { NextApiRequest, NextApiResponse } from "next";
import { mongooseConnect } from "@/lib/mongoose";
import Product from "@/models/product";
import Pedido from "@/models/pedido";
const stripe = require("stripe")(process.env.STRIPE_SK);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    res.json({ Message: "The API only accepts POST Request" });
  }
  await mongooseConnect();

  const { address, cart } = req.body;
  const { nome, cep, estado, cidade, bairro, rua, numero, complemento, email } =
    address;
  const cartIds = cart;
  const uniqueCartIds = [...new Set(cartIds)];
  const productInfos = await Product.find({ _id: uniqueCartIds });

  let line_items = [];

  for (let productId of uniqueCartIds) {
    const productInfo = productInfos.find((p) => p.id === productId);
    const quantity = cartIds.filter((id) => id === productId)?.length || 0;
    if (quantity > 0 && productInfo) {
      line_items.push({
        quantity,
        price_data: {
          currency: "USD",
          product_data: { name: productInfo.title },
          unit_amount: quantity * productInfo.price * 100,
        },
      });
    }
  }

  const pedido = await Pedido.create({
    line_items,
    nome,
    cep,
    estado,
    cidade,
    bairro,
    rua,
    numero,
    complemento,
    email,
    paid: false,
  });

  const session = await stripe.checkout.sessions.create({
    line_items,
    mode: "payment",
    customer_email: email,
    success_url: process.env.PUBLIC_URL + "/checkout?success=1",
    cancel_url: process.env.PUBLIC_URL + "/checkout?canceled=1",
    metadata: { orderId: pedido._id.toString(), test: "ok" },
  });

  res.json({
    url: session.url,
  });
}

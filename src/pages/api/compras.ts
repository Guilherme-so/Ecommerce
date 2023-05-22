import type { NextApiRequest, NextApiResponse } from "next";
import { mongooseConnect } from "@/lib/mongoose";
import Pedido from "@/models/pedido";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await mongooseConnect();
  if (req.method === "POST") {
    const { email } = req.body;

    const compras = await Pedido.find({ email: email }).sort({ createdAt: -1 });
    res.status(200).json(compras);
  }
}

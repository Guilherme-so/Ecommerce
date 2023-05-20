import { mongooseConnect } from "@/lib/mongoose";
import Product from "@/models/product";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await mongooseConnect();
  if (req.method === "POST") {
    const { ids } = req.body;
    const carts = await Product.find({ _id: { $in: ids } });
    res.status(200).json(carts);
  }
}

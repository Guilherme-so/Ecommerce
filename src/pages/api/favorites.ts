import type { NextApiRequest, NextApiResponse } from "next";
import { mongooseConnect } from "@/lib/mongoose";
import Product from "@/models/product";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await mongooseConnect();
  if (req.method === "POST") {
    const { favorites } = req.body;
    const fav = await Product.find({ _id: { $in: favorites } });
    res.status(200).json(fav);
  }
}

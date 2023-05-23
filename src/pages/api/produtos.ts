import type { NextApiRequest, NextApiResponse } from "next";
import { mongooseConnect } from "@/lib/mongoose";
import Product from "@/models/product";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await mongooseConnect();
  if (req.method === "GET") {
    const { category } = req.query;
    if (category) {
      const produtos = await Product.find().populate({
        path: "category",
      });
      const filteredProducts = produtos.filter(
        (prod) => prod.category.name === category
      );
      res.json(filteredProducts);
    } else {
      const produtos = await Product.find();
      res.json(produtos);
    }
  }
}

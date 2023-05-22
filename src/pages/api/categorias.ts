import type { NextApiRequest, NextApiResponse } from "next";
import { mongooseConnect } from "@/lib/mongoose";
import Category from "@/models/category";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await mongooseConnect();
  if (req.method === "GET") {
    const categorias = await Category.find();
    res.json(categorias);
  }
}

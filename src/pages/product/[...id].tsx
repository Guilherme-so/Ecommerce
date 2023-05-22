import React from "react";
import { GetServerSideProps } from "next";
import { mongooseConnect } from "@/lib/mongoose";
import Product from "@/models/product";
import ProductById from "@/components/product";
import Category from "@/models/category";

export default function SingleProduct({ product, category, parentCategory }) {
  return (
    <ProductById
      product={product}
      category={category}
      parentCategory={parentCategory}
    />
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.query;
  await mongooseConnect();
  const product = await Product.findById(id);

  const category = await Category.findById(product?.category);
  const parentCategory = await Category.findById(category?.parent);

  return {
    props: {
      product: JSON.parse(JSON.stringify(product)),
      category: JSON.parse(JSON.stringify(category)),
      parentCategory: JSON.parse(JSON.stringify(parentCategory)),
    },
  };
};

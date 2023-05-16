import { ObjectId } from "mongodb";
import {
  Schema,
  SchemaDefinitionProperty,
  Types,
  model,
  models,
} from "mongoose";

export interface IProduct {
  title: string;
  description: string;
  price: number;
  images: string[];
  category: ObjectId | SchemaDefinitionProperty<ObjectId>;
  properties: object;
}

const createScheme = Schema;

const ProductScheme = new createScheme<IProduct>({
  title: {
    type: String,
    required: true,
  },
  description: String,
  price: {
    type: Number,
    required: true,
  },
  images: {
    type: [String],
  },
  category: {
    type: Types.ObjectId,
    ref: "Category",
  },
  properties: {
    type: Object,
  },
});

const Product = models.Product || model<IProduct>("Product", ProductScheme);

export default Product;

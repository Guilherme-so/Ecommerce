import { Schema, Types, model, models } from "mongoose";

interface IProperty {
  name: string;
  values: string;
}

export interface ICategory {
  name: string;
  parent?: any;
  properties?: IProperty[];
}

const createScheme = Schema;

const CategoryScheme = new createScheme<ICategory>(
  {
    name: {
      type: String,
      required: true,
    },
    parent: {
      type: Types.ObjectId,
      ref: "Category",
    },
    properties: {
      type: [Object],
    },
  },
  {
    timestamps: {
      createdAt: true,
      updatedAt: true,
    },
  }
);

const Category =
  models?.Category || model<ICategory>("Category", CategoryScheme);

export default Category;

import { ReactNode } from "react";

export type ProductIds = number[];

export type ProductCartItemProps = {
  product: ProductType;
  ids: ProductIds;
};

export type ProductType = {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: ProductTagsType;
  brand: string;
  sku: string;
  weight: number;
  dimensions: ProductDimensionsType;
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
  reviews: ProductReviews[];
  returnPolicy: string;
  minimumOrderQuantity: number;
  meta: ProductMetaType;
  thumbnail: string;
  images: string[];
};

export type ProductTagsType = string[];

export type ProductDimensionsType = {
  width: number;
  height: number;
  depth: number;
};
export type ProductReviews = {
  rating: number;
  comment: number;
  date: string;
  reviewerName: string;
  reviewerEmail: string;
};

export type ProductMetaType = {
  createdAt: string;
  updatedAt: string;
  barcode: string;
  qrCode: string;
};

export type ProductResponse = {
  limit: number;
  products: ProductType[];
  skip: number;
  total: number;
};

export type CategoryListProps = {
  handleCategory: (value: string) => void;
};

export type ProductRatingProps = {
  rating: number;
  direction?: "row" | "column";
};

export type StyledTypographyProps = {
  variant: string;
  text: string | ReactNode;
  styles?: { [key: string]: string | number };
};

import { ProductDimensionsType, ProductType } from "@/components/products/types";

export type FavoriteProductType = Omit<ProductType, "id"> & { id: string; _id: number };

export type FavoriteProductItemProps = {
  handleRemove: (id: string | number) => () => void;
  product: FavoriteProductType;
};

export type ProductDimensionsProps = {
  dimensions: ProductDimensionsType;
  weight: number;
};

export type ProductImagesProps = { images: string[] };
export type ProductTagsProps = { tags: string[] };

export enum AvailabilityStatus {
  IN_STOCK = "In Stock",
  LOW_STOCK = "Low Stock",
}

export enum StatusColors {
  error = "error.main",
  warning = "warning.main",
  success = "success.main",
  primary = "primary.main",
  default = "text.primary",
}

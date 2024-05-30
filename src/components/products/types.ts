export type FavoriteProductType = Omit<ProductType, "id"> & { id: string; _id: number };

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
  tags: ProductTags;
  brand: string;
  sku: string;
  weight: number;
  dimensions: ProductDimensions;
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
  reviews: ProductReviews[];
  returnPolicy: string;
  minimumOrderQuantity: number;
  meta: ProductMeta;
  thumbnail: string;
  images: string[];
};

export type ProductTags = string[];
export type ProductDimensions = {
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

export type ProductMeta = {
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
};

import { fetcherPost } from "@/api";
import { ProductType } from "@/api/types";

const createProduct = (data: ProductType) => {
  return fetcherPost(`products`, data);
};
export default createProduct;

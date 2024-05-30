import { fetcherPost } from "@/api";
import { ProductDataType } from "@/api/types";

const createProduct = (data: ProductDataType) => {
  return fetcherPost(`products`, data);
};
export default createProduct;

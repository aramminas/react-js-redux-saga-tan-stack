import { fetcherPost } from "@/api";
import { ProductType } from "@/components/products/types";

const addFavouriteProduct = (product: ProductType) => fetcherPost(`favoriteProducts`, product);
export default addFavouriteProduct;

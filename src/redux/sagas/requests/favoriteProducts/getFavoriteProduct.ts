import { fetcherGet } from "@/api";

const getFavouriteProduct = (query: string) => fetcherGet(`favoriteProducts`, query);
export default getFavouriteProduct;

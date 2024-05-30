import { fetcherGet } from "@/api";

const getFavouriteProducts = () => fetcherGet(`favoriteProducts`);
export default getFavouriteProducts;

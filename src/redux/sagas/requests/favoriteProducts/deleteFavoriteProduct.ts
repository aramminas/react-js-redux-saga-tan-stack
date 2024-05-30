import { fetcherDelete } from "@/api";

const deleteFavouriteProduct = (id: number) => fetcherDelete(`favoriteProducts`, id);
export default deleteFavouriteProduct;

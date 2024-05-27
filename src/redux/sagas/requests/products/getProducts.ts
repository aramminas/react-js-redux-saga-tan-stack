import { fetcherGet } from "@/api";

const getProducts = () => fetcherGet(`products`);
export default getProducts;

import { fetcherGetProduct } from "@/api/productApi";
import { dashboardProdLimit } from "@/components/constants";

const getMainProducts = () => fetcherGetProduct(`products`, `?limit=${dashboardProdLimit}`);
export default getMainProducts;

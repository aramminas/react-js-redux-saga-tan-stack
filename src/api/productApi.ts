import { Methods } from "@/api/types";

const apiUrl = process.env.PRODUCT_API_URL;

export const fetcherGetProduct = async (path, query = "") => {
  const response = await fetch(`${apiUrl}/${path}${query}`, { method: Methods.GET });
  return await response.json();
};

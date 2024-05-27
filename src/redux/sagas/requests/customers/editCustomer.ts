import { fetcherPut } from "@/api";
import { CustomerType } from "@/api/types";

const editCustomer = (data: CustomerType) => {
  return fetcherPut(`customers`, data);
};

export default editCustomer;

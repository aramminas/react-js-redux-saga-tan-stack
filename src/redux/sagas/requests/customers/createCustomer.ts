import { fetcherPost } from "@/api";
import { CustomerType } from "@/api/types";

const createCustomer = (data: Omit<CustomerType, "id">) => {
  return fetcherPost(`customers`, data);
};

export default createCustomer;

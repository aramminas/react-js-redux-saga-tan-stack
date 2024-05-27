import { fetcherDelete } from "@/api";

const deleteCustomer = (id: string) => {
  return fetcherDelete(`customers`, { id });
};

export default deleteCustomer;

import { fetcherGet } from "@/api";

const getCustomers = () => fetcherGet(`customers`);
export default getCustomers;

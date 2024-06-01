import { fetcherGet } from "@/api";

const getUserProfile = () => fetcherGet(`userProfile`);
export default getUserProfile;

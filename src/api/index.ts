import { Methods } from "@/api/types";

const apiUrl = process.env.API_URL;

export const fetcher = async ( method = Methods.GET, path, data = {} ) => {
  if (method === Methods.GET || method === Methods.DELETE) {
    const response = await fetch(`${apiUrl}/${path}`, { method: method });
    return await response.json();
  }

  const jsonData = JSON.stringify(data);

  const response = await fetch(`${apiUrl}/${path}`, {
    method: method,
    body: jsonData,
    headers: {
      "Content-Type": "application/json",
    },
  });

  return await response.json();
};

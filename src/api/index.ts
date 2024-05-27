import { Methods } from "@/api/types";
import { RequestInit } from "typescript/lib";

const apiUrl = process.env.API_URL;

export const fetcherPost = async (path, data: { [ket: string]: string | number } | {} = {}) => {
  const jsonData = JSON.stringify(data);
  let options: RequestInit = {
    method: Methods.POST,
    body: jsonData,
    headers: {
      "Content-Type": "application/json",
    },
  };

  const response = await fetch(`${apiUrl}/${path}`, options);

  return await response.json();
};

export const fetcherGet = async (path, params = "") => {
  const response = await fetch(`${apiUrl}/${path}${params}`, { method: Methods.GET });
  return await response.json();
};

export const fetcherDelete = async (path, data: { id?: string } | {} = {}) => {
  const response = await fetch(`${apiUrl}/${path}/${data?.id || "0"}`, { method: Methods.DELETE });
  return await response.json();
};

export const fetcherPut = async (path, data: { id?: string } | {} = {}) => {
  const jsonData = JSON.stringify(data);
  const options: RequestInit = {
    method: Methods.PUT,
    body: jsonData,
    headers: {
      "Content-Type": "application/json",
    },
  };
  const response = await fetch(`${apiUrl}/${path}/${data?.id || "0"}`, options);
  return await response.json();
};

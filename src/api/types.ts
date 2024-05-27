export enum Methods {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  DELETE = "DELETE",
}

export type CustomerType = {
  id: string;
  imgUrl?: string;
  firstName: string;
  lastName: string;
  gender: string;
  profession: string;
  description: string;
};

export type ProductType = {
  id: string;
  name: string;
};

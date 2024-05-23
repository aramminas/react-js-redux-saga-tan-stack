export type CustomerType = {
  id: string;
  imgUrl?: string;
  firstName: string;
  lastName: string;
  profession: string;
  description: string;
};

export enum Methods {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  DELETE = "DELETE",
}

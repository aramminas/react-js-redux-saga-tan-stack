import { z } from "zod";
import { CustomerType } from "@/api/types";
import { invalid_type_error, required_error, short_error } from "@/components/customers/constants";

export const customerSchema = z.object({
  firstName: z
    .string({ invalid_type_error, required_error })
    .trim()
    .regex(/^[a-zA-Z\s]*$/, "Name can only contain letters")
    .min(2, short_error),
  lastName: z
    .string({ invalid_type_error, required_error })
    .trim()
    .regex(/^[a-zA-Z\s]*$/, "Name can only contain letters")
    .min(2, short_error),
  profession: z.string({ invalid_type_error, required_error }).trim().min(2, short_error),
  description: z.string({ invalid_type_error, required_error }).trim().min(2, short_error),
  gender: z.enum([Gender.FEMALE, Gender.MALE, Gender.OTHER]),
});

export enum Gender {
  FEMALE = "female",
  MALE = "male",
  OTHER = "other",
}

export const initState: Omit<CustomerType, "id"> = {
  firstName: "",
  lastName: "",
  profession: "",
  description: "",
  gender: "",
};

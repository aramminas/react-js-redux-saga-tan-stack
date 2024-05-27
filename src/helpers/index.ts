import { Gender, initState } from "@/components/customers/types";
import { CustomerType } from "@/api/types";

const imageUrl = process.env.USER_AVATAR;

export function setFormErrors(formErrors) {
  let errors = { ...initState };

  formErrors.forEach((error) => {
    errors[error.path[0]] = error.message;
  });

  return errors;
}

export function getAvatarUrl({
  firstName,
  lastName,
  gender,
}: Pick<CustomerType, "firstName" | "lastName" | "gender">) {
  let genderPath = "";

  switch (gender) {
    case Gender.MALE:
      genderPath = "public/boy";
      break;
    case Gender.FEMALE:
      genderPath = "public/girl";
      break;
    default:
      genderPath = `username`;
      break;
  }

  return `${imageUrl}/${genderPath}?username=${firstName}+${lastName}`;
}

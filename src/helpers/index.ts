import { CustomerType } from "@/api/types";
import { Gender, initState } from "@/components/customers/types";
import { AvailabilityStatus, StatusColors } from "@/components/favoriteProducts/types";

const imageUrl = process.env.USER_AVATAR;
const googleUrl = process.env.GOOGLE_URL;

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

export function avatarName(name: string, text?: string) {
  return (() => {
    if (!name && !text) {
      return "";
    }

    const nameArray = (name || text || "").split(" ");

    if (nameArray.length > 1) {
      return `${nameArray[0][0]}${nameArray[1][0]}`;
    }

    if (name) {
      if (text) {
        return `${name.charAt(0)}${text.charAt(0)}`;
      }

      return `${name.charAt(0)}${name.charAt(1)}`;
    }

    if (text) {
      return `${text.charAt(0)}${text.charAt(1)}`;
    }

    return "";
  })().toUpperCase();
}

export function dateFormat(stringDate: string) {
  const date = new Date(stringDate);
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return new Intl.DateTimeFormat("en-US", options).format(date);
}

export function searchUrl(params: string) {
  return `${googleUrl}?q=${params}`;
}

export function availabilityStatusColor(text: string) {
  switch (text) {
    case AvailabilityStatus.IN_STOCK:
      return StatusColors.success;
    case AvailabilityStatus.LOW_STOCK:
      return StatusColors.warning;
    default:
      return StatusColors.default;
  }
}

export function randomInt(min = 0, max = 6) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

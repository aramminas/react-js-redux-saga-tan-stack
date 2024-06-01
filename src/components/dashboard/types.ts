export type UserType = {
  firstName: string;
  lastName: string;
  role: string;
  email: string;
  avatar: string;
};

export type UserProfileProps = { profile: UserType; error: string | null };

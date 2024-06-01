import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import EmailIcon from "@mui/icons-material/Email";
import Person3Icon from "@mui/icons-material/Person3";

import NoData from "@/components/basic/NoData";
import { UserProfileProps } from "@/components/dashboard/types";

function UserProfile({
  error,
  profile: { firstName, lastName, role, email, avatar },
}: UserProfileProps) {
  if (error) {
    return <NoData />;
  }

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <Box
        component="img"
        sx={{
          height: 150,
          width: 150,
        }}
        alt="user avatar"
        src={avatar}
      />
      <Typography variant="h6">{`${firstName}, ${lastName}`}</Typography>
      <Box>
        <Typography variant="subtitle1" sx={{ display: "flex", alignItems: "center" }}>
          <Person3Icon />
          <Typography variant="span" sx={{ marginLeft: 1, color: "text.secondary" }}>
            {role}
          </Typography>
        </Typography>
        <Typography variant="subtitle2" sx={{ display: "flex", alignItems: "center" }}>
          <EmailIcon />
          <Typography variant="span" sx={{ marginLeft: 1, color: "text.secondary" }}>
            {email}
          </Typography>
        </Typography>
      </Box>
    </Box>
  );
}

export default UserProfile;

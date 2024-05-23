import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import Typography from "@mui/material/Typography";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";

import { CustomerType } from "@/api/types";

function CustomersItems({
  id,
  imgUrl,
  firstName,
  lastName,
  description,
  profession,
}: CustomerType) {
  return (
    <>
      <ListItem alignItems="flex-start" key={id}>
        <ListItemAvatar>
          <Avatar alt={`${firstName} ${lastName}`} src={imgUrl || ""} />
        </ListItemAvatar>
        <ListItemText
          primary={profession}
          secondary={
            <>
              <Typography
                sx={{ display: "inline" }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                {firstName} {lastName}
              </Typography>
              {` — ${description}`}
            </>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
    </>
  );
}

export default CustomersItems;

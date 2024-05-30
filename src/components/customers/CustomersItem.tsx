import { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import Typography from "@mui/material/Typography";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";

import { CustomerType } from "@/api/types";
import { CustomerActions } from "@/components/types";
import ActionButtons from "@/components/basic/ActionButtons";
import EllipsisTooltip from "@/components/basic/EllipsisTooltip";

function CustomersItem({
  id,
  imgUrl,
  firstName,
  lastName,
  description,
  profession,
  handleEdit,
  handleDelete,
}: CustomerType & CustomerActions) {
  const [isHovered, setHover] = useState(false);

  return (
    <>
      <ListItem
        alignItems="flex-start"
        key={id}
        sx={{ position: "relative" }}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <ListItemAvatar>
          <Avatar alt={`${firstName} ${lastName}`} src={imgUrl || ""} />
        </ListItemAvatar>
        <ListItemText
          primary={<EllipsisTooltip text={profession} width={230} />}
          secondary={
            <>
              <Typography
                sx={{ display: "inline" }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                {firstName}, {lastName}
              </Typography>
              {` — ${description}`}
            </>
          }
        />
        {isHovered && <ActionButtons id={id} handleEdit={handleEdit} handleDelete={handleDelete} />}
      </ListItem>
      <Divider variant="inset" component="li" />
    </>
  );
}

export default CustomersItem;

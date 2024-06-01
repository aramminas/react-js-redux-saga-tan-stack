import { Link } from "react-router-dom";
import Typography, { TypographyOwnProps } from "@mui/material/Typography";

import { siteName } from "@/components/constants";

function Copyright(props: TypographyOwnProps) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {"Copyright © "}
      <Link to="/">
        <Typography color="text.secondary" variant="span">
          {siteName}
        </Typography>
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default Copyright;

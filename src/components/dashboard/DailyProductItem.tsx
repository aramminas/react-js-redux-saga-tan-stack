import { useState } from "react";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";

import TotalPrice from "@/components/basic/TotalPrice";
import { ProductType, StyledTypographyProps } from "@/components/products/types";

const StyledTypography = ({ variant, text, styles = {} }: StyledTypographyProps) => {
  return (
    <Typography
      variant={variant}
      sx={{
        fontFamily: "var(--theme-font-family)",
        color: "var(--theme-color-base-dark)",
        fontSize: "14px",
        " @media(max-width:991px)": { fontSize: "12px" },
        " @media(max-width:479px)": { fontSize: "10px" },
        ...styles,
      }}
    >
      {text}
    </Typography>
  );
};

function DailyProductItem({
  product: { title, price, rating, category, thumbnail },
}: {
  product: ProductType;
}) {
  const [shadow, setShadow] = useState(false);

  return (
    <Grid item xs={12} sm={6} md={6} lg={4} xl={4}>
      <Card
        sx={{
          borderRadius: "4px",
          fontFamily: "var(--theme-font-family)",
          transition: "0.8s",
          width: "356px",
          boxShadow: !shadow
            ? "0px 0px 2.5px gray"
            : "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px",
        }}
        onMouseEnter={() => setShadow(true)}
        onMouseLeave={() => setShadow(false)}
      >
        <CardContent>
          <Box
            component="img"
            sx={{
              height: "100%",
              width: "100%",
              objectFit: "cover",
              transition: "1.8s",
              transform: `scale(${shadow ? 1.2 : 1})`,
            }}
            alt={title}
            src={thumbnail}
          />
        </CardContent>
        <Divider
          orientation="vertical"
          variant="fullWidth"
          sx={{ borderColor: "#f8f3f3", borderWidth: "0.05rem" }}
          flexItem
        />
        <CardActions sx={{ padding: "10px" }}>
          <Stack sx={{ alignItems: "center", gap: "6px" }} direction="row">
            <Stack
              sx={{
                alignItems: "flex-start",
                width: "100%",
                fontSize: "14px",
                " @media(max-width:479px)": { fontSize: "12px" },
              }}
              spacing="5px"
            >
              <StyledTypography variant="subtitle1" text={title} />
              <StyledTypography variant="p" text={category} styles={{ color: "#a9a4a4" }} />
            </Stack>
            <Divider
              orientation="vertical"
              variant="fullWidth"
              sx={{ borderColor: "#f8f3f3", borderWidth: "0.0005rem" }}
              flexItem
            />
            <TotalPrice price={price} rating={rating} direction="column" />
          </Stack>
        </CardActions>
      </Card>
    </Grid>
  );
}

export default DailyProductItem;

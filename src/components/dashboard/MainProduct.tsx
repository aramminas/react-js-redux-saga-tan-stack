import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";

import { ProductType } from "@/components/products/types";

function MainProduct({
  title,
  description,
  brand,
  thumbnail,
}: Omit<ProductType, "title" | "description" | "brand" | "thumbnail">) {
  return (
    <Card sx={{ display: "flex" }}>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="h5">
            {title}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            {brand}
          </Typography>
        </CardContent>
        <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </Box>
      </Box>
      <CardMedia component="img" sx={{ width: 300 }} image={thumbnail} alt={title} />
    </Card>
  );
}

export default MainProduct;

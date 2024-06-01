import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { TotalPriceProps } from "@/components/basic/types";
import ProductRating from "@/components/products/ProductRating";

function TotalPrice({ rating, price, direction = "row" }: TotalPriceProps) {
  return (
    <Box
      sx={{
        marginY: 2,
        display: "flex",
        flexDirection: direction,
        alignItems: direction === "row" ? "initial" : "center",
      }}
    >
      <Box sx={{ fontSize: 12, width: 100, paddingLeft: 2 }}>
        <Typography variant="subtitle1" sx={{ fontSize: 11, color: "text.secondary" }}>
          Total price:
        </Typography>
        <Typography sx={{ fontWeight: "bolder" }}>${price}</Typography>
      </Box>
      <ProductRating rating={rating} direction={direction} />
    </Box>
  );
}

export default TotalPrice;

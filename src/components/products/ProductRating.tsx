import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";

import { ProductRatingProps } from "@/components/products/types";

function ProductRating({ rating }: ProductRatingProps) {
  return (
    <Box
      sx={{
        width: 200,
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
      }}
    >
      <Rating
        size="small"
        name="text-feedback"
        value={rating}
        readOnly
        precision={0.1}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
      />
      <Box sx={{ ml: 1 }}>({rating})</Box>
    </Box>
  );
}
export default ProductRating;

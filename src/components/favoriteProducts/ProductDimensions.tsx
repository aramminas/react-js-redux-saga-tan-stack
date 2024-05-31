import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ViewInArIcon from "@mui/icons-material/ViewInAr";

import { ProductDimensionsProps } from "@/components/favoriteProducts/types";

function ProductDimensions({ dimensions, weight }: ProductDimensionsProps) {
  return (
    <Box>
      <Typography
        variant="p"
        sx={{ display: "flex", alignItems: "center", fontWeight: 600, fontSize: 20 }}
      >
        <ViewInArIcon fontSize="large" sx={{ marginRight: 1 }} /> Dimensions
      </Typography>
      <Box sx={{ display: "flex", flexDirection: "column", marginY: 1 }}>
        <Typography variant="p" color="secondary.main">
          Height:{" "}
          <Typography variant="span" color="text.secondary" sx={{ fontWeight: "bold" }}>
            {dimensions.height}
          </Typography>{" "}
          mm
        </Typography>
        <Typography variant="p" color="error.main">
          Width:{" "}
          <Typography variant="span" color="text.secondary" sx={{ fontWeight: "bold" }}>
            {dimensions.width}
          </Typography>{" "}
          mm
        </Typography>
        <Typography variant="p" color="warning.main">
          Depth:{" "}
          <Typography variant="span" color="text.secondary" sx={{ fontWeight: "bold" }}>
            {dimensions.depth}
          </Typography>{" "}
          mm
        </Typography>
        <Typography variant="p" color="warning.main">
          Weight:{" "}
          <Typography variant="span" color="primary.main" sx={{ fontWeight: "bold" }}>
            {weight}
          </Typography>{" "}
        </Typography>
      </Box>
    </Box>
  );
}

export default ProductDimensions;

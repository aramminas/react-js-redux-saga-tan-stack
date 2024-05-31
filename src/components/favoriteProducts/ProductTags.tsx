import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";
import BookmarkTwoToneIcon from "@mui/icons-material/BookmarkTwoTone";

import { randomInt } from "@/helpers";
import { themColors } from "@/components/constants";
import { ProductTagsProps } from "@/components/favoriteProducts/types";

function ProductTags({ tags }: ProductTagsProps) {
  return (
    <Box sx={{ width: 310, height: "auto" }}>
      <Typography sx={{ fontWeight: 600, marginBottom: 1 }} color="text.secondary">
        Product tags
      </Typography>
      <Box sx={{ display: "flex", flexWrap: "wrap" }} gap={1}>
        {tags.map((tag) => (
          <Chip
            key={tag}
            label={tag}
            color={themColors[randomInt()]}
            icon={<BookmarkTwoToneIcon />}
          />
        ))}
      </Box>
    </Box>
  );
}

export default ProductTags;

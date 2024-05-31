import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import Typography from "@mui/material/Typography";
import ImageListItem from "@mui/material/ImageListItem";

import { ProductImagesProps } from "@/components/favoriteProducts/types";

function ProductImages({ images }: ProductImagesProps) {
  return (
    <Box sx={{ width: 310, height: "auto" }}>
      <Typography sx={{ fontWeight: 600 }} color="text.secondary">
        Product images
      </Typography>
      <ImageList variant="masonry" cols={3} gap={8}>
        {images.map((item, index) => (
          <ImageListItem key={index}>
            <img
              srcSet={`${item}?w=248&fit=crop&auto=format&dpr=2 2x`}
              src={`${item}?w=248&fit=crop&auto=format`}
              alt="product image"
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}

export default ProductImages;

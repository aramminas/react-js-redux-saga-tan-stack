import { useDispatch } from "react-redux";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import LinkWrapper from "@mui/material/Link";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import FavoriteTwoToneIcon from "@mui/icons-material/FavoriteTwoTone";
import DeleteForeverTwoToneIcon from "@mui/icons-material/DeleteForeverTwoTone";

import { ProductCartItemProps } from "@/components/products/types";
import ProductRating from "@/components/products/ProductRating";
import { addFavoriteProduct } from "@/redux/actions/favoriteProducts/addFavoriteProduct";
import { deleteFavoriteProduct } from "@/redux/actions/favoriteProducts/deleteFavoriteProduct";

function ProductCartItem({ product, ids }: ProductCartItemProps) {
  const dispatch = useDispatch();
  const { category, description, id, thumbnail, price, title, rating } = product;

  const addToFavorites = () => {
    const productData = { ...product, _id: id };
    delete productData.id;
    dispatch(addFavoriteProduct(productData));
  };

  const removeFromFavorites = () => {
    dispatch(deleteFavoriteProduct(id));
  };

  return (
    <Grid item xs={16} lg={7}>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia sx={{ height: 140 }} image={thumbnail} title="green iguana" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {category}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
          <Box sx={{ marginTop: 2, display: "flex" }}>
            <Box sx={{ fontSize: 12, width: 100, paddingLeft: 2 }}>
              <Typography variant="subtitle1" sx={{ fontSize: 11, color: "text.secondary" }}>
                Total price:
              </Typography>
              <Typography sx={{ fontWeight: "bolder" }}>${price}</Typography>
            </Box>
            <ProductRating rating={rating} />
          </Box>
        </CardContent>
        <CardActions>
          {ids.includes(id) ? (
            <Button
              onClick={removeFromFavorites}
              size="small"
              startIcon={<DeleteForeverTwoToneIcon color="error" />}
            >
              Remove from favorites
            </Button>
          ) : (
            <Button
              onClick={addToFavorites}
              size="small"
              startIcon={<FavoriteTwoToneIcon color="success" />}
            >
              Add to favorites
            </Button>
          )}
          <LinkWrapper
            target="_blank"
            size="small"
            href={`https://www.google.com/search?q=${title}`}
          >
            <Button size="small">Learn More</Button>
          </LinkWrapper>
        </CardActions>
      </Card>
    </Grid>
  );
}

export default ProductCartItem;

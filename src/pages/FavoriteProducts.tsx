import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";

import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

import NoData from "@/components/basic/NoData";
import LoadingProgress from "@/components/basic/LoadingProgress";
import FavoriteProductItem from "@/components/favoriteProducts/FavoriteProductItem";
import { deleteFavoriteProduct } from "@/redux/actions/favoriteProducts/deleteFavoriteProduct";

function FavoriteProducts() {
  const dispatch = useDispatch();
  const { data: favouriteProducts, loading } = useSelector((state) => state.favoriteProducts);

  const removeFromFavorites = (id: string) => () => {
    dispatch(deleteFavoriteProduct(id));
  };

  const removeFavoriteProduct = useMemo(() => removeFromFavorites, []);

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
          <Typography variant="h4">Favorite products list</Typography>
          <Divider sx={{ marginBottom: 2 }} />
          <Grid container spacing={2} gap={2} sx={{ paddingLeft: 2, paddingTop: 2 }}>
            {loading && <LoadingProgress />}
            {favouriteProducts && favouriteProducts?.length === 0 && <NoData />}
            {favouriteProducts.map((product) => (
              <FavoriteProductItem
                key={product.id}
                product={product}
                handleRemove={removeFavoriteProduct}
              />
            ))}
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
}

export default FavoriteProducts;

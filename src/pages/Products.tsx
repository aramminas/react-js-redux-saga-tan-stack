import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Alert from "@mui/material/Alert";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import AddIcon from "@mui/icons-material/Add";
import Typography from "@mui/material/Typography";

import { getProducts } from "@/redux/actions/products/getProducts";
import { createProduct } from "@/redux/actions/products/createProducts";

import LoadingProgress from "@/components/basic/LoadingProgress";

function Products() {
  const dispatch = useDispatch();
  const { data: products, loading, error } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  const addProduct = () => {
    dispatch(createProduct({ name: "other product" }));
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={8} lg={9}>
        <Paper
          sx={{
            p: 2,
            display: "flex",
            flexDirection: "column",
            minHeight: 240,
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography variant="h4">Products</Typography>
            <Button
              variant="contained"
              fullWidth={false}
              startIcon={<AddIcon />}
              onClick={addProduct}
            >
              Add product
            </Button>
          </Box>
          <Divider variant="fullWidth" component="hr" sx={{ marginY: 2 }} />
          {!!error && <Alert severity="error">{error}</Alert>}
          {loading ? (
            <LoadingProgress />
          ) : (
            products.map((product) => {
              return <div key={product.id}>{product.name}</div>;
            })
          )}
        </Paper>
      </Grid>
    </Grid>
  );
}

export default Products;

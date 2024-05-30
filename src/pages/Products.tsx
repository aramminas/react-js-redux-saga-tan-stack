import { useQuery } from "react-query";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Alert from "@mui/material/Alert";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";

import NoData from "@/components/basic/NoData";
import { fetcherGetProduct } from "@/api/productApi";
import { prodLimit } from "@/components/products/constants";
import CategoryList from "@/components/products/CategoryList";
import LoadingProgress from "@/components/basic/LoadingProgress";
import ProductCartItem from "@/components/products/ProductCartItem";
import ProductPagination from "@/components/products/ProductPagination";
import { ProductResponse, ProductType } from "@/components/products/types";

function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(0);
  const [category, setCategory] = useState("");
  const getPage = searchParams.get("page") || "0";

  const { ids, error: favoriteError } = useSelector((state) => state.favoriteProducts);

  useEffect(() => {
    setPage(+getPage);
    refetch();
  }, [getPage, category]);

  const handleCategoryChange = (name: string) => {
    setCategory(name);
    setPage(0);
    if (searchParams.has("page")) {
      searchParams.delete("page");
      setSearchParams(searchParams);
    }
  };

  const fetchProjects = async (pageNumber: number, category: string) => {
    const skip = pageNumber ? (pageNumber - 1) * prodLimit : 0;
    let query = `?limit=${prodLimit}&skip=${skip}`;

    if (category) {
      query = `/category/${category}` + query;
    }

    return await fetcherGetProduct("products", query);
  };

  const { isLoading, error, data, refetch } = useQuery<ProductType[]>({
    queryKey: ["projects", page, category],
    queryFn: () => fetchProjects(page, category),
  });

  const { products, total }: ProductResponse = data || {};
  const totalPages = total ? Math.floor(total / prodLimit) : 0;

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={8} lg={9}>
        <Paper
          sx={{
            p: 2,
            display: "flex",
            flexDirection: "column",
            minHeight: 300,
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography variant="h4">Products</Typography>
          </Box>
          <CategoryList handleCategory={handleCategoryChange} />
          <Divider variant="fullWidth" component="hr" sx={{ marginY: 2 }} />
          <Grid
            container
            gap={2}
            columns={16}
            sx={{ justifyContent: "space-between", minHeight: 300 }}
          >
            {!!error && (
              <Alert severity="error" sx={{ marginBottom: 2 }}>
                {error}
              </Alert>
            )}
            {!!favoriteError && (
              <Alert severity="error" sx={{ marginBottom: 2 }}>
                {favoriteError}
              </Alert>
            )}
            {products && products?.length === 0 && <NoData />}
            {isLoading && <LoadingProgress />}
            {(products || []).map((product) => {
              return <ProductCartItem key={product.id} ids={ids} product={product} />;
            })}
          </Grid>
          <Divider variant="fullWidth" component="hr" sx={{ marginY: 2 }} />
          {!isLoading && <ProductPagination total={totalPages} />}
        </Paper>
      </Grid>
    </Grid>
  );
}

export default Products;

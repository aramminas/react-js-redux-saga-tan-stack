import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import { ProductType } from "@/components/products/types";
import DailyProductItem from "@/components/dashboard/DailyProductItem";

function DailyProducts({ products }: { products: ProductType[] }) {
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "#f8f3f3",
        padding: "15px",
        boxSizing: "border-box",
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        " @media(max-width:479px)": { padding: "5px" },
      }}
    >
      <Box sx={{ width: "100%", maxWidth: "1200px" }}>
        <Grid container rowSpacing={"10px"} columnSpacing={"10px"}>
          {products.map((product) => (
            <DailyProductItem key={product.id} product={product} />
          ))}
        </Grid>
      </Box>
    </Box>
  );
}

export default DailyProducts;

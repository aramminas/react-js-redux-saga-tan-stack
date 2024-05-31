import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { ProductMetaType } from "@/components/products/types";

function ProductMeta({ meta }: { meta: ProductMetaType }) {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", marginY: 1 }}>
      <Box
        component="img"
        sx={{
          height: 150,
          width: 150,
          maxHeight: { xs: 200, md: 250 },
          maxWidth: { xs: 200, md: 250 },
        }}
        alt="product Qr code"
        src={meta.qrCode}
      />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Typography variant="h6" color="text.primary">
          Barcode
        </Typography>{" "}
        <Typography>{meta.barcode}</Typography>
      </Box>
    </Box>
  );
}

export default ProductMeta;

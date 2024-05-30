import { Link, useLocation } from "react-router-dom";

import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";

function ProductPagination({ total }: { total: number }) {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const page = parseInt(query.get("page") || "1", 20);

  if (!total) return null;

  return (
    <Pagination
      sx={{ display: "flex", justifyContent: "center" }}
      page={page}
      count={total}
      renderItem={(item) => (
        <PaginationItem
          component={Link}
          to={`/products${item.page === 1 ? "" : `?page=${item.page}`}`}
          {...item}
        />
      )}
    />
  );
}

export default ProductPagination;

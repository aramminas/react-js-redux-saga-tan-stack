import { useState, SyntheticEvent } from "react";
import { useQuery } from "react-query";

import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";

import { fetcherGetProduct } from "@/api/productApi";
import { CategoryListProps } from "@/components/products/types";

function CategoryList({ handleCategory }: CategoryListProps) {
  const [categoryIndex, setCategoryIndex] = useState(0);
  const fetchProjectCategories = async () => {
    return await fetcherGetProduct("products", "/category-list");
  };

  const { isLoading, data } = useQuery<string[]>({
    queryKey: ["categories", "products"],
    queryFn: fetchProjectCategories,
  });

  const handleChangeCategoryIndex = (event: SyntheticEvent, newValue: number) => {
    setCategoryIndex(newValue);
    handleCategory(data?.[newValue] || "");
  };

  return (
    <>
      <Divider
        textAlign="left"
        sx={{
          "&::before, &::after": {
            borderColor: "info.main",
          },
        }}
      >
        <Typography variant="h6" color="primary.main">
          Categories
        </Typography>
      </Divider>
      {isLoading && (
        <Box sx={{ paddingLeft: 5, height: 48 }}>
          <CircularProgress />
        </Box>
      )}
      {!!data && (
        <Tabs
          value={categoryIndex}
          onChange={handleChangeCategoryIndex}
          variant="scrollable"
          scrollButtons
          allowScrollButtonsMobile
        >
          {!!data && data.map((category) => <Tab key={category} label={category} />)}
        </Tabs>
      )}
    </>
  );
}

export default CategoryList;

import Box from "@mui/material/Box";
import EditIcon from "@mui/icons-material/Edit";
import IconButton from "@mui/material/IconButton";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

import { CustomerActions } from "@/components/types";

function ActionButtons({ handleEdit, handleDelete, id }: CustomerActions) {
  return (
    <Box
      sx={{
        gap: 1,
        right: 0,
        display: "flex",
        position: "absolute",
      }}
    >
      <IconButton
        color="primary"
        size="small"
        aria-label="edit customer"
        onClick={handleEdit(id || "0")}
      >
        <EditIcon fontSize="small" />
      </IconButton>
      <IconButton
        color="error"
        size="small"
        aria-label="delete customer"
        onClick={handleDelete(id || "0")}
      >
        <DeleteForeverIcon fontSize="small" />
      </IconButton>
    </Box>
  );
}

export default ActionButtons;

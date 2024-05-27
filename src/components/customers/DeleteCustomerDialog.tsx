import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import Divider from "@mui/material/Divider";
import DialogTitle from "@mui/material/DialogTitle";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";

import { DeleteDialogProps } from "@/components/types";

function DeleteCustomerDialog({ open, setOpen, handleReset, handleDelete }: DeleteDialogProps) {
  const handleClose = () => {
    setOpen(false);
    handleReset();
  };

  return (
    <>
      <Dialog open={open} onClose={handleClose} fullWidth>
        <DialogTitle>Delete customer</DialogTitle>
        <Divider />
        <DialogContent>
          <DialogContentText sx={{ marginBottom: 1 }}>
            Are you sure you want to delete the customer?
          </DialogContentText>
        </DialogContent>
        <Divider />
        <DialogActions>
          <Button onClick={handleClose} color="inherit">
            Cancel
          </Button>
          <Button onClick={handleDelete} type="button" color="error" autoFocus>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default DeleteCustomerDialog;

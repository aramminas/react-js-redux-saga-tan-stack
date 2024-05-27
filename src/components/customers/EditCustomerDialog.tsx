import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import Divider from "@mui/material/Divider";
import TextField from "@mui/material/TextField";
import DialogTitle from "@mui/material/DialogTitle";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";

import { EditDialogProps } from "@/components/types";
import { setFormErrors, getAvatarUrl } from "@/helpers";
import RadioGender from "@/components/basic/RadioGender";
import { initState, customerSchema } from "@/components/customers/types";
import { CustomerType } from "@/api/types";

function EditCustomerDialog({ open, onClose, updateCustomer, customer }: EditDialogProps) {
  const [formData, setFormData] = useState<CustomerType | Omit<CustomerType, "id">>(
    customer || initState,
  );
  const [errors, setErrors] = useState(initState);

  const handleSubmit = (e) => {
    e.preventDefault();
    const result = customerSchema.safeParse(formData);

    if (!result.success) {
      const errorsData = setFormErrors(result.error.issues);
      setErrors({ ...errorsData });
      return;
    }

    const updateData: CustomerType = {
      ...formData,
      id: customer.id,
      imgUrl: getAvatarUrl(formData),
    };
    updateCustomer(updateData);
    handleClose();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleClose = () => {
    setFormData({ ...initState } as CustomerType);
    setErrors({ ...initState });
    onClose?.();
  };

  return (
    <>
      <Dialog open={open} onClose={handleClose} fullWidth>
        <form onSubmit={handleSubmit} noValidate>
          <DialogTitle>Edit customer</DialogTitle>
          <Divider />
          <DialogContent>
            <DialogContentText sx={{ marginBottom: 1 }}>
              Make the necessary changes and click "Edit" to save the changes.
            </DialogContentText>
            <Box sx={{ display: "grid", gap: 1 }}>
              <TextField
                label="First name"
                variant="outlined"
                fullWidth
                name="firstName"
                value={formData.firstName}
                error={!!errors.firstName}
                helperText={errors.firstName}
                onChange={handleChange}
                required
              />
              <TextField
                label="Last Name"
                variant="outlined"
                fullWidth
                name="lastName"
                value={formData.lastName}
                error={!!errors.lastName}
                helperText={errors.lastName}
                onChange={handleChange}
                required
              />
              <TextField
                label="Profession"
                variant="outlined"
                fullWidth
                name="profession"
                value={formData.profession}
                error={!!errors.profession}
                helperText={errors.profession}
                onChange={handleChange}
                required
              />
              <TextField
                multiline
                minRows={2}
                maxRows={10}
                label="Description"
                name="description"
                value={formData.description}
                error={!!errors.description}
                helperText={errors.description}
                onChange={handleChange}
                placeholder="Enter profession description..."
              />
              <RadioGender error={errors.gender} onChange={handleChange} gender={customer.gender} />
            </Box>
          </DialogContent>
          <Divider />
          <DialogActions>
            <Button onClick={handleClose} color="inherit">
              Cancel
            </Button>
            <Button type="submit" autoFocus>
              Edit
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </>
  );
}

export default EditCustomerDialog;

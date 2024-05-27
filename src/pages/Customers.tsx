import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import Paper from "@mui/material/Paper";
import Alert from "@mui/material/Alert";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import AddIcon from "@mui/icons-material/Add";
import Typography from "@mui/material/Typography";

import { CustomerType } from "@/api/types";
import { getCustomers } from "@/redux/actions/customers/getCustomers";
import { editCustomer } from "@/redux/actions/customers/editCustomer";
import { createCustomer } from "@/redux/actions/customers/createCustomer";
import { deleteCustomer } from "@/redux/actions/customers/deleteCustomer";

import LoadingProgress from "@/components/basic/LoadingProgress";
import CustomersItems from "@/components/customers/CustomersItems";
import EditCustomerDialog from "@/components/customers/EditCustomerDialog";
import DeleteCustomerDialog from "@/components/customers/DeleteCustomerDialog";
import CreateCustomerDialog from "@/components/customers/CreateCustomerDialog";

function Customers() {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const [selectedId, setSelectedId] = useState("");
  const { data: customers, loading, error } = useSelector((state) => state.customers);

  useEffect(() => {
    dispatch(getCustomers());
  }, []);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleDeleteOpen = (id: string) => () => {
    setDeleteOpen(true);
    setSelectedId(id);
  };

  const handleEditOpen = (id: string) => () => {
    setEditOpen(true);
    setSelectedId(id);
  };

  const handleEditClose = () => {
    setEditOpen(false);
    setSelectedId("");
  };

  const handleDelete = () => {
    setDeleteOpen(false);
    dispatch(deleteCustomer(selectedId));
    setSelectedId("");
  };

  const handleReset = () => {
    setDeleteOpen(false);
    setSelectedId("");
  };

  const addCustomer = (customer: Omit<CustomerType, "id">) => {
    dispatch(createCustomer(customer));
  };

  const updateCustomer = (customer: CustomerType) => {
    dispatch(editCustomer(customer));
  };

  return (
    <>
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
              <Typography variant="h4">Customers</Typography>
              <Button variant="contained" onClick={handleClickOpen} startIcon={<AddIcon />}>
                Add Customer
              </Button>
            </Box>
            <Divider variant="fullWidth" component="hr" sx={{ marginY: 2 }} />
            {!!error && <Alert severity="error">{error}</Alert>}
            {loading ? (
              <LoadingProgress />
            ) : (
              <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
                {!!customers.length &&
                  customers.map((customer) => {
                    return (
                      <CustomersItems
                        key={customer.id}
                        handleDelete={handleDeleteOpen}
                        handleEdit={handleEditOpen}
                        {...customer}
                      />
                    );
                  })}
              </List>
            )}
          </Paper>
        </Grid>
      </Grid>
      <CreateCustomerDialog open={open} setOpen={setOpen} addCustomer={addCustomer} />
      {!!selectedId && (
        <EditCustomerDialog
          open={editOpen}
          onClose={handleEditClose}
          updateCustomer={updateCustomer}
          customer={customers.find((customer) => customer.id === selectedId) || {}}
        />
      )}
      <DeleteCustomerDialog
        open={deleteOpen}
        setOpen={setDeleteOpen}
        handleReset={handleReset}
        handleDelete={handleDelete}
      />
    </>
  );
}

export default Customers;

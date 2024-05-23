import { useQuery, useMutation } from "react-query";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import { fetcher } from "@/api";
import { Methods } from "@/api/types";
import { CustomerType } from "@/api/types";
import CustomersItems from "@/components/customers/CustomersItems";

function Customers() {
  const getCustomers = async () => {
    return await fetcher(Methods.GET, `customers`);
  };

  const createCustomer = async (data: Omit<CustomerType, "id">) => {
    return await fetcher(Methods.POST, `customers`, data);
  };

  const {
    isPending,
    error,
    data: customers = [],
    refetch,
  } = useQuery<CustomerType[]>({
    queryKey: ["customers"],
    queryFn: getCustomers,
  });

  const { mutate, isLoading } = useMutation(createCustomer);

  const addCustomer = () => {
    console.log("Customer added!");
    const customer: Omit<CustomerType, "id"> = {
      imgUrl: "google.com",
      firstName: "Elisa",
      lastName: "Morgan",
      profession: "Critic",
      description:
        "A critic is a person who communicates an assessment and an opinion of various forms of creative works such as art, literature, music, cinema, theater, fashion, architecture, and food.",
    };

    try {
      mutate(customer);
      setTimeout(() => {
        refetch();
      }, 1500);
    } catch (error) {
      console.log("error", error);
    }
  };

  if (isPending || isLoading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>Something went wrong!</h2>;
  }

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
          <Box sx={{ width: "100%", maxWidth: 500 }}>
            <Typography variant="h4">Customers</Typography>
            <Button variant="contained" onClick={addCustomer}>
              Contained
            </Button>
          </Box>
          <Divider variant="fullWidth" component="hr" />
          <List
            sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
          >
            {customers.map((customer) => {
              return <CustomersItems key={customer.id} {...customer} />;
            })}
          </List>
        </Paper>
      </Grid>
    </Grid>
  );
}

export default Customers;

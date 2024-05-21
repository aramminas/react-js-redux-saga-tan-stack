import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

function Customers() {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={8} lg={9}>
        <Paper
          sx={{
            p: 2,
            display: 'flex',
            flexDirection: 'column',
            minHeight: 240,
          }}
        >
          Customers 1
        </Paper>
      </Grid>
    </Grid>
  );
}

export default Customers;
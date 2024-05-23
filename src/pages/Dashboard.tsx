import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

function Dashboard() {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={8} lg={9}>
        <Paper
          sx={{
            p: 2,
            display: 'flex',
            flexDirection: 'column',
            height: 240,
          }}
        >
          Content 1
        </Paper>
      </Grid>
      <Grid item xs={12} md={4} lg={3}>
        <Paper
          sx={{
            p: 2,
            display: 'flex',
            flexDirection: 'column',
            height: 240,
          }}
        >
          Content 2
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <Paper sx={{p: 2, display: 'flex', flexDirection: 'column'}}>
          Content 3
        </Paper>
      </Grid>
    </Grid>
  )
}

export default Dashboard;
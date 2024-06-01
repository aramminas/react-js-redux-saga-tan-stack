import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Alert from "@mui/material/Alert";

import UserProfile from "@/components/dashboard/UserProfile";
import MainProduct from "@/components/dashboard/MainProduct";
import DailyProducts from "@/components/dashboard/DailyProducts";
import LoadingProgress from "@/components/basic/LoadingProgress";
import { getDashboardData } from "@/redux/actions/dashboardData/getDashboardData";

function Dashboard() {
  const dispatch = useDispatch();
  const {
    data: { userProfile, products },
    loading,
    error,
  } = useSelector((state) => state.dashboard);

  useEffect(() => {
    dispatch(getDashboardData());
  }, []);

  return (
    <Grid container spacing={3}>
      {!!error && (
        <Grid item xs={12}>
          <Paper sx={{ pt: 2, pl: 2, height: 90, display: "flex", alignItems: "center" }}>
            <Alert severity="error" sx={{ marginBottom: 2 }}>
              {error}
            </Alert>
          </Paper>
        </Grid>
      )}
      <Grid item xs={12} md={8} lg={9}>
        <Paper
          sx={{
            p: 2,
            display: "flex",
            flexDirection: "column",
            height: 260,
          }}
        >
          {!loading && products?.length ? <MainProduct {...products[0]} /> : <LoadingProgress />}
        </Paper>
      </Grid>
      <Grid item xs={12} md={4} lg={3}>
        <Paper
          sx={{
            p: 2,
            display: "flex",
            flexDirection: "column",
            height: 260,
          }}
        >
          {!loading && userProfile ? (
            <UserProfile profile={userProfile} error={error} />
          ) : (
            <LoadingProgress />
          )}
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
          {!loading && products?.length ? (
            <DailyProducts products={products.slice(1)} />
          ) : (
            <LoadingProgress />
          )}
        </Paper>
      </Grid>
    </Grid>
  );
}

export default Dashboard;

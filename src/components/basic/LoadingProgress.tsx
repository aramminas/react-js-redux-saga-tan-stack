import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import LinearProgress from "@mui/material/LinearProgress";

function LoadingProgress() {
  return (
    <Box sx={{ width: "100%" }}>
      <Typography variant="h6">Loading...</Typography>
      <LinearProgress />
    </Box>
  );
}

export default LoadingProgress;

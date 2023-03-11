import { Box, Button, InputLabel } from "@mui/material";
import { TextField, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

const LoginPage = () => {
  return (
    <Box>
      <Grid2 container spacing={1}>
        <Grid2 xs={12}>
          <Typography variant="h4" color="initial" sx={{ textAlign: "center" }}>
            Log In Page
          </Typography>
        </Grid2>
        <Grid2 xs={3}></Grid2>
        <Grid2 xs={3}>
          <InputLabel htmlFor="email" sx={{ marginTop: "1rem" }}>
            Enter Your Email Address:
          </InputLabel>
          <TextField
            required
            id="email"
            label="Required"
            defaultValue="Enter Email"
            sx={{
              marginTop: "1rem",
              marginRight: "1rem",
            }}
          />
        </Grid2>
        <Grid2 xs={3}>
          <InputLabel
            htmlFor="password"
            sx={{
              marginTop: "1rem",
            }}
          >
            Enter Password
          </InputLabel>
          <TextField
            required
            id="password"
            label="Required"
            defaultValue="Enter Password"
            sx={{
              marginTop: "1rem",
            }}
          />
        </Grid2>
        <Grid2 xs={3}></Grid2>
      </Grid2>
      <Box
        display={"flex"}
        justifyContent={"center"}
        sx={{ marginTop: "1rem" }}
      >
        <Button>Log In</Button>
      </Box>
    </Box>
  );
};
export default LoginPage;

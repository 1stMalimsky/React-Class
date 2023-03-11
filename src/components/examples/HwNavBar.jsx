import { Image, Warning } from "@mui/icons-material";
import { AppBar, Toolbar, Button, Typography } from "@mui/material";
import { Fragment } from "react";

const NavBar = () => {
  return (
    <Fragment>
      <AppBar position="sticky">
        <Toolbar variant="dense">
          <img src="./navlogo.png" alt="navbarLogo" />
          <Button varient="text" color="warning">
            <Typography variant="h6" margin="dense">
              Home
            </Typography>
          </Button>
          <Button varient="text" color="warning">
            <Typography variant="h6" margin="dense">
              About
            </Typography>
          </Button>
          <Button varient="text" color="warning">
            <Typography variant="h6" margin="dense">
              Contact
            </Typography>
          </Button>
          <Button varient="text" color="warning">
            <Typography variant="h6" margin="dense">
              FAQ
            </Typography>
          </Button>
        </Toolbar>
      </AppBar>
    </Fragment>
  );
};

export default NavBar;

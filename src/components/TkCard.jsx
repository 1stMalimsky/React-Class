import { Fragment } from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import {
  Card,
  CardMedia,
  CardHeader,
  CardContent,
  CardActions,
} from "@mui/material";

/*
img 
title
price
description
*/

const TkCard = () => {
  return (
    <Fragment>
      <Card sx={{ width: "20rem" }}>
        <CardMedia
          component="img"
          height="194"
          image="https://thumbs.dreamstime.com/b/baltic-see-very-nice-pic-klaip%C4%97da-176842928.jpg"
          alt="An Image"
        />
        <CardHeader title="A Nice Image" subheader="Not so nice, I think" />
        <CardContent>
          <Typography textAlign={"left"} color={"blue"}>
            Title:
          </Typography>
          <Typography textAlign={"left"} color={"green"}>
            Price:
          </Typography>
          <Typography textAlign={"left"} color={"yellow"}>
            Description:
          </Typography>
          <Typography textAlign={"left"} color={"red"}>
            Address:
          </Typography>
        </CardContent>
        <CardActions>
          <Button variant="contained" color="success">
            Click Here
          </Button>
          <Button variant="contained" color="success">
            Click Here2
          </Button>
        </CardActions>
      </Card>
    </Fragment>
  );
};

export default TkCard;

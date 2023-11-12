import React from "react";
import { Card, CardContent, Button, Grid } from "@mui/material";
import { Link } from "react-router-dom";

export const Navigation = () => {
  return (
    <Card>
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={2}>
            <Link to="/">
              <Button variant="outlined" color="error" fullWidth>
                Home
              </Button>
            </Link>
          </Grid>
          <Grid item xs={2}>
            <Link to="/product">
              <Button variant="outlined" color="error" fullWidth>
                Product
              </Button>
            </Link>
          </Grid>
          <Grid item xs={2}>
            <Link to="/info">
              <Button variant="outlined" color="error" fullWidth>
                Info
              </Button>
            </Link>
          </Grid>
          <Grid item xs={2}>
            <Link to="/contact">
              <Button variant="outlined" color="error" fullWidth>
                Contact
              </Button>
            </Link>
          </Grid>
          <Grid item xs={2}>
            <Link to="/service">
              <Button variant="outlined" color="error" fullWidth>
                Service
              </Button>
            </Link>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

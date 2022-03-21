import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import three from "./assets/three.png";
import Rebutton from "./component/Rebutton";

function Feature() {
  return (
    <div>
      <Grid container spacing={2} mt={8}>
        <Grid item xs={6}>
          <Typography mt={16} variant="h2">Guides by Thousand Sunny</Typography>
          <Typography variant="body1" mt={2}>
            Packed with tips and advice from our on-the-ground experts, our city
            guides app (iOS and Android) is the ultimate resource before and
            during a trip.
          </Typography>
          <Box mt={2}>
            <Rebutton title="Download" />
          </Box>
        </Grid>
        <Grid item xs={6}>
          <img src={three} alt="banner" />
        </Grid>
      </Grid>
    </div>
  );
}

export default Feature;

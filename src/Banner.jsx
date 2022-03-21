import React from "react";
import { Grid, Typography, Box } from "@mui/material";
import onethousand from "./assets/onethousand.png";
import Rebutton from "./component/Rebutton";

function Banner() {
  return (
    <div>
      <Grid container spacing={2} mt={8}>
        <Grid item xs={6}   >
          <img src={onethousand} alt="banner" />
        </Grid>
        <Grid item xs={6}>
          <Box ml={16} xs={{maxWidth: 10  }}>
          <Typography variant="h2">a new way to search world</Typography>
          <Typography variant="body1">
            For decades travellers have reached for Lonely Planet books when
            looking to plan and execute their perfect trip, but now, they can
            also let Lonely Planet Experiences lead the way
          </Typography>
          </Box>
          <Box ml={16} mt={4}>
            <Rebutton title="Learn more" />
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}

export default Banner;

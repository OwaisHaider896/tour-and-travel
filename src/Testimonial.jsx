import React, { useState } from "react";
import { Grid, Typography, Rating, Box, Paper } from "@mui/material";
import man from "./assets/man.png";

const Testimonial = () => {
  const [value, setValue] = useState(2);
  return (
    <Box>
      <Grid container spacing={2} >
        <Grid item xs={6}>
          <Typography mt={16} variant="h2">Testimonials</Typography>
          <Box
            mt={16}
            sx={{
              "& > legend": { mt: 2 },
            }}
          >
            <Rating
              name="simple-controlled"
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
            />
          </Box>

          <Box >
            <Typography variant="body1">
              “Quisque in lacus a urna fermentum euismod. Integer mi nibh,
              dapibus ac scelerisque eu, facilisis quis purus. Morbi blandit sit
              amet turpis nec”
            </Typography>
          </Box>
          <Box >
            <Typography mt={8} variant="subtitle1">Edward Newgate</Typography>
          </Box>

          <Box>
            <Typography  variant="subtitle2">Founder Circle</Typography>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginTop: 32
            }}
          >
            <img className="image" src={man} alt="banner" />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Testimonial;

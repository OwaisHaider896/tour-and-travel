import React from "react";
import thousand from "./assets/thousand.png";
import { Typography, Grid, Select, Box, MenuItem} from "@mui/material";
import Rebutton from "./component/Rebutton";

function Hero() {
  const names = [
    "Oliver Hansen",
    "Van Henry",
    "April Tucker",
    "Ralph Hubbard",
    "Omar Alexander",
    "Carlos Abbott",
    "Miriam Wagner",
    "Bradley Wilkerson",
    "Virginia Andrews",
    "Kelly Snyder",
  ];

  return (
    <div>
      <Grid container spacing={2} mt={8}>
        <Grid item xs={6}>
          <Typography variant="h1">Explore and Travel</Typography>
          <Typography variant="h6" mt={6}>
            Holiday finder
          </Typography>
          <Grid
            container
            mt={2}
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={6}>
              <Select label="Location">
              {names.map((name) => (
            <MenuItem
              key={name}
              value={name}
            >
              {name}
            </MenuItem>
          ))}
              </Select>
            </Grid>
            <Grid item xs={6}>
              <Select label="Activity">
              {names.map((name) => (
            <MenuItem
              key={name}
              value={name}
            >
              {name}
            </MenuItem>
          ))}
              </Select>
            </Grid>
            <Grid item xs={6}>
              <Select label="Grade">
              {names.map((name) => (
            <MenuItem
              key={name}
              value={name}
            >
              {name}
            </MenuItem>
          ))}
              </Select>
            </Grid>
            <Grid item xs={6}>
              <Select label="Date">
              {names.map((name) => (
            <MenuItem
              key={name}
              value={name}
            >
              {name}
            </MenuItem>
          ))}
              </Select>
            </Grid>
          </Grid>
          <Box ml={0} mt={4}>
            <Rebutton title="Explore" />
          </Box>
        </Grid>

        <Grid item xs={6}>
          <img src={thousand} alt="banner" />
        </Grid>
      </Grid>
    </div>
  );
}

export default Hero;

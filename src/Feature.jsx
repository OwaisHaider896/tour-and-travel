import {
  Grid,
  Typography,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Box,
  Button,
} from "@mui/material";
import React from "react";
import twelve from "./assets/twelve.png";
import sea from "./assets/sea.png";
import dish from "./assets/dish.png"
import mountain from "./assets/mountain.png";


function Feature() {
  return (
    <div>
        <Box mt={8}>
      <Typography variant="h2">Featured Destination</Typography>
      </Box>
      <Box mt={4} mb={8}>
        <Grid container spacing={{ xs: 2, md: 3 }}>
          <Grid item xs={2} md={3}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                alt="man doing youga"
                height="140"
                image={twelve}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Lizard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={2} md={3}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                alt="beautiful sea"
                height="140"
                image={sea}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Lizard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={2} md={3}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                alt="mountain view"
                height="140"
                image={mountain}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Lizard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={2} md={3}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image={dish}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Lizard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default Feature;

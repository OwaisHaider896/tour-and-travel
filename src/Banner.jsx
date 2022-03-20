import React from 'react'
import { Grid } from '@mui/material'
import onethousand from "./assets/onethousand.png"

function Banner() {
  return (
    <div>
        <Grid container spacing={2} mt={8} >
            <Grid item xs={6}>
            <img src={onethousand} alt="banner" />
            </Grid>

        </Grid>
     </div>
  )
}

export default Banner
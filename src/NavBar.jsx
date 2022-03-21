import React from "react";
import logo from "./assets/logo.png";
import Rebutton from "./component/Rebutton";
import { Button, Box } from "@mui/material";

const NavBar = ({ title }) => {
  return (
    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
      <Box
        sx={{
          background: `center no-repeat url(${logo})`,
          height: 45,
          width: 45,
          marginTop: 2,
        }}
        alt="logo"
      />

      <Box sx={{ display: "flex", marginTop: 3, justifyContent: "flex-end" }}>
        <ul className="nav-list">
          <li>Home</li>
          <li>Destinations</li>
          <li>About</li>
          <li>Partner</li>
        </ul>
        <Button
          sx={{
            width: 132,
            textTransform: "none",
            color: "#FB8F1D",
            marginRight:2,
            borderColor: "#FB8F1D",
            '&:hover': {
              backgroundColor: 'white',
              borderColor: '#FB8F1D',
              color: "FB8F1D"  
            },
          }}
          variant="outlined"
        >
          Login
        </Button>

        <Rebutton title="Register" />
      </Box>
    </Box>
  );
};

export default NavBar;

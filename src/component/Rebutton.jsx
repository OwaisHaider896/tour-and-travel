import React from "react";
import Button from "@mui/material/Button";

const Rebutton = ({ title }) => {
  return (
    <div>
      <Button
        sx={{
          backgroundColor: "#FB8F1D",
          color: "white",
          textTransform: "none",
          width: 132,
          '&:hover': {
            backgroundColor: '#FB8F1D',
            color: "white"  
          },
          
        }}
        contained
      >
        {title}
      </Button>
    </div>
  );
};

export default Rebutton;

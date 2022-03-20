import React from "react";
import Grid from "@mui/material/Grid";
import "./App.css";
import { Container } from "@mui/material";
import NavBar from "./NavBar";
import Hero from "./Hero";
import Banner from "./Banner";


function App() {
  return (
    <div className="App">
        <Container>
         <NavBar />
         <Hero />
         <Banner />
        </Container>
    </div>
  );
}

export default App;

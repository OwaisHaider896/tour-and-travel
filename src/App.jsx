import React from "react";
import Grid from "@mui/material/Grid";
import "./App.css";
import { Container } from "@mui/material";
import NavBar from "./NavBar";
import Hero from "./Hero";
import Banner from "./Banner";
import Guide from "./Guide";
import Testimonial from "./Testimonial";
import Trending from "./Trending";
import Feature from "./Feature";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <Container>
        <NavBar />
        <Hero />
        <Banner />
        <Feature />
        <Guide />
        <Testimonial /> 
        <Trending />
        <Footer />
      </Container>
    </div>
  );
}

export default App;

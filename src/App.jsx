import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Projects from "./components/Projects/Projects";
import Techs from "./components/Techs/Techs"; 
// import About from "./components/About/About";
import About from "../src/components/About/About.jsx";
import Connect from "../src/components/Connect/Connect.jsx";



function App() {
  return (
    <div className=" ">
      <Router>
        <Header />
        <Hero/>
        <Projects/>
        <Techs/>
        <About/>
        <Connect/>
        
        {/* <Projects/> */}
       

        {/* <Routes> */}
          {/* <Route path="/react" element={<Hero />} /> */}
{/* <Route path="/projects" element={<Projects />} /> */}
        {/* </Routes> */}
       
      </Router>
     
    </div>
  );
}

export default App;

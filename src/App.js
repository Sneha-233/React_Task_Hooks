import React from "react";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Home from "./Home";
import About from "./about";
import Contact from "./contact";
import Navbar from "./navbar";

function App() {
  return (
   
    <>
    
    <Router>

      <Navbar/>

    <Routes>


    <Route path="/" element={<Home/>}></Route>
    <Route path="/about" element={<About/>}></Route>
    <Route path="/contact/:name/:id" element={<Contact/>}></Route>

    </Routes>

    </Router>
    
    
    </>


  );
}

export default App;

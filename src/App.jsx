import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./components/pages/Home";
import Products from "./components/pages/Products";
import { Signup } from "./components/pages/SignUp/Signup";
import { Prices } from "./components/pages/Prices/Prices";
import { Info } from "./components/pages/Info/Info";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/info" exact element={<Info />} />
          <Route path="/products" exact element={<Products />} />
          <Route path="/prices" exact element={<Prices />} />
          <Route path="/sign-up" exact element={<Signup />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

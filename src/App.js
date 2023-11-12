import React from "react";
import { Card, CardContent } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { Product } from "./components/Product";
import { Info } from "./components/Info";
import { Contact } from "./components/Contact";
import { Service } from "./components/Service";
import { Navigation } from "./components/Navigation";

function App() {
  return (
    <Card>
      <CardContent>
        <BrowserRouter>
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product" element={<Product />} />
            <Route path="/info" element={<Info />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/service" element={<Service />} />
          </Routes>
        </BrowserRouter>
      </CardContent>
    </Card>
  );
}

export default App;

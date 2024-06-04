import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Signup from "./Signup";
import Hotel1 from "./Hotel1";
import Hotel2 from "./Hotel2";
import Hotel3 from "./Hotel3";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Signup />} />
          <Route path="/hotel1" element={<Hotel1 />} />
          <Route path="/hotel2" element={<Hotel2 />} />
          <Route path="/hotel3" element={<Hotel3 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

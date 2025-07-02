import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Ravisabha from "./pages/Ravisabha";
import Padyatra from "./pages/Padyatra";

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ravisabha" element={<Ravisabha />} />
        <Route path="/padyatra" element={<Padyatra />} />
      </Routes>
    </HashRouter>
  );
};

export default App;

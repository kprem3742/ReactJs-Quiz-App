import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import Java from "./Components/Java/Java";
import Python from "./Components/Python/Python";
import GeneralAptitude from "./Components/GeneralAptitude/GeneralAptitude";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Java" element={<Java />} />
          <Route path="/Python" element={<Python />} />
          <Route path="/generalAptitude" element={<GeneralAptitude />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

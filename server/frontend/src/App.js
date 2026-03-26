import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dealers from "./components/Dealers/Dealers";
import DealerDetails from "./components/Dealers/DealerDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dealers />} />
        <Route path="/dealer/:id" element={<DealerDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
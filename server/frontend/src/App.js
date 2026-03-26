import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dealers from "./components/Dealers/Dealers";
import DealerDetails from "./components/Dealers/DealerDetails";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dealers />} />
        <Route path="/dealer/:id" element={<DealerDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
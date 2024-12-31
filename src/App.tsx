import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home";
import Clients from "./components/clients/Clients";

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/clients" element={<Clients />} />
      </Routes>
    </Suspense>
  );
}

export default App;

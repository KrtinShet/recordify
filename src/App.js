import React, { useEffect } from "react";
import IndexPage from "./Pages/IndexPage";
import RecordPage from "./Pages/RecordPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  useEffect(() => {});
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/record" element={<RecordPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container } from "../components/molecules/container/Container";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Container />}>
          <Route path="counter" element={<>No counter yet</>} />
          <Route path="context-excercise" element={<>Not Context yet</>} />
          <Route path="custom-hook" element={<>No Cusmtom yet</>} />
          <Route path="*" element={<>Not Found</>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

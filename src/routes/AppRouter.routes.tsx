import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container } from "../components/molecules/container/Container";

const Counter = lazy(() => import("custom_hooks/Counter"));

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={"Loading"}>
        <Routes>
          <Route path="/" element={<Container />}>
            <Route path="counter" element={<Counter />} />
            <Route path="context-excercise" element={<>Not Context yet</>} />
            <Route path="custom-hook" element={<>No Cusmtom yet</>} />
            <Route path="*" element={<>Not Found</>} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

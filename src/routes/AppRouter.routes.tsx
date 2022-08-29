import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container } from "../components/molecules/container/Container";

const Counter = lazy(() => import("custom_hooks/Counter"));

export const AppRouter = () => {
  return (
    <BrowserRouter>
      
        <Routes>
          <Route path="/" element={<Container />}>
            <Route path="hooks" element={
              <Suspense fallback={<> Loading... </>}>
                <Counter />
              </Suspense>
            } />
            <Route path="context" element={<>Not Context yet</>} />
            <Route path="libraries" element={<>No Cusmtom yet</>} />
            <Route path="*" element={<>Not Found</>} />
          </Route>
        </Routes>
    </BrowserRouter>
  );
};

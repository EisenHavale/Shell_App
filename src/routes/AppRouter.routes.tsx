import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container } from "../components/molecules/container/Container";

const AppShared = lazy(() => import("custom_hooks/AppShared"));

export const AppRouter = () => {
  return (
    <BrowserRouter>
      
        <Routes>
          <Route path="/" element={<Container />}>
            <Route path="hooks" element={
              <Suspense fallback={<> Loading... </>}>
                <AppShared />
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

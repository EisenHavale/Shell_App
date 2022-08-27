import React from "react";
import { Outlet } from "react-router-dom";

export const Container = () => {
  return (
    <>
      <h1>Hello World</h1>
      <Outlet />
    </>
  );
};

import React, { useContext} from "react";
import { Outlet } from "react-router-dom";
import { headerContext } from "../../../app/HeaderContext/context";
import { Header } from "../../organisms/header/Header";
import { NavBar } from '../navbar/NavBar';


export const Container = () => {
  const context = useContext(headerContext);
  return (
    <>
      <Header context={context}>
        <NavBar />
      </Header>
      <Outlet />
    </>
  );
};

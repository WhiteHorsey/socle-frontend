import React from "react";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div>
      <div>NAVBAR</div>
      <Outlet />
    </div>
  );
};

export default MainLayout;

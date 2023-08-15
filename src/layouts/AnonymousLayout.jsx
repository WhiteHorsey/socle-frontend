import React from "react";
import { Outlet } from "react-router-dom";

const AnonymousLayout = () => {
  return (
    <div className="bg-gray-50 dark:bg-gray-900">
      <Outlet />
    </div>
  );
};

export default AnonymousLayout;

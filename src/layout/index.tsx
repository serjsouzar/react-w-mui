import { Outlet } from "react-router-dom";
import Dashboard from "../pages/Dashboard";

export const Layout = () => {
  return (
    <>
      <Dashboard />
      <Outlet />
    </>
  );
};

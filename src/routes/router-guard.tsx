import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const role = "emp";
const RouterGuard: React.FC<{
  roles: string[];
  path: string;
  key: string;
}> = (props) => {
  const auth = props.roles.includes(role);

  // if (auth) return <Route path={props.path} element={props.element} />;

  return auth ? <Outlet /> : <Navigate to="/" />;
};

export default RouterGuard;

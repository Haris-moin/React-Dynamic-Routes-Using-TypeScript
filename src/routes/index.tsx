import React from "react";
import Header from "../components/common/header";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import RouterGuard from "./router-guard";
import { routConfig } from "./route-config";
import authRoutes from "./auth-routes";

const AppRoutes: React.FC = (props) => {
  return (
    <Router>
      <Header />
      <Routes>
        {authRoutes.map((parentRoute) => {
          return (
            <Route
              key={parentRoute.path}
              path={parentRoute.path}
              element={
                <RouterGuard
                  key={parentRoute.path}
                  roles={parentRoute.roles}
                  path={parentRoute.path}
                />
              }
            >
              {parentRoute.children?.map((route, index) => {
                return (
                  <Route
                    key={index}
                    path={route.path}
                    element={route.element}
                  />
                );
              })}
            </Route>
          );
        })}
        {routConfig.map((parentRoute) => {
          return (
            <Route
              key={parentRoute.path}
              path={parentRoute.path}
              element={
                <RouterGuard
                  key={parentRoute.path}
                  roles={parentRoute.roles}
                  path={parentRoute.path}
                />
              }
            >
              {parentRoute.children?.map((route, index) => {
                return (
                  <Route
                    key={index}
                    path={route.path}
                    element={route.element}
                  />
                );
              })}
            </Route>
          );
        })}
      </Routes>
    </Router>
  );
};

export default AppRoutes;

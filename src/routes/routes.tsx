import { BrowserRouter, Routes as Router, Route, Navigate } from "react-router-dom";

import * as Paths from "./route.paths";

import WrapperRoute from "./wrapper.routes";

export const unprotectedRoutes = [
  {
    path: "/",
    component: Paths.LOGIN(),
    exact: true
  }
];

export const protectedRoutes = [
  {
    path: "/home",
    component: Paths.HOME(),
    exact: true
  }
];

const Routes: React.FC = () => {
  const routedProtected = protectedRoutes.map((route) => (
    <Route key={route.path} path={route.path} element={<route.component />} />
  ));

  const routedUnprotected = unprotectedRoutes.map((route) => (
    <Route key={route.path} path={route.path} element={<route.component />} />
  ));

  return (
    <BrowserRouter>
      <Router>
        <Route element={<WrapperRoute redirect="/" isPrivate={false} />}>{routedUnprotected}</Route>
        <Route element={<WrapperRoute redirect="/admin/login" isPrivate={true} />}>
          {routedProtected}
        </Route>
        <Route path="*" element={<Navigate replace to="/" />} />
      </Router>
    </BrowserRouter>
  );
};

export default Routes;

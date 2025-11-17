import App from "../App";

import { createBrowserRouter } from "react-router-dom";
import { ProtectedRoute, PublicRoute } from "./guard";
import Dashboard from "../features/dashboard/dashboard";
import Login from "../features/Login/login";
import Register from "../features/Register/register";

const router = createBrowserRouter([
  {
    path: "/login",
    element: (
      <PublicRoute>
        <Login />
      </PublicRoute>
    ),
  },
  {
    path: "/register",
    element: (
      <PublicRoute>
        <Register />
      </PublicRoute>
    ),
  },
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    ),
  },
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <App />
      </ProtectedRoute>
    ),
  },
]);

export default router;

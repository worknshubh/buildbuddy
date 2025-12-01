import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import HomePage from "./screens/home.jsx";
import LoginPage from "./screens/login.jsx";
import SignUpPage from "./screens/signup.jsx";
import ErrorPage from "./screens/error.jsx";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [{ path: "/", element: <HomePage /> }],
  },
  { path: "/login", element: <LoginPage /> },
  { path: "/register", element: <SignUpPage /> },
  { path: "*", element: <ErrorPage /> },
]);
createRoot(document.getElementById("root")).render(
  <RouterProvider router={routes}></RouterProvider>
);

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import './App.css'
import React from "react";
import ReactDOM from "react-dom/client";
import Exercise1 from "./components/pages/Exercise1"
import Exercise2 from "./components/pages/Exercise2"
import MainPage from "./components/pages/MainPage"

const router = createBrowserRouter([
    {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/e1",
    element: <Exercise1 />,
  },
  {
    path: "/e2",
    element: <Exercise2 />,
  },
]);

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <RouterProvider router={router} />
);

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import Layout from "./components/layout/Layout";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    children: [
      { index: true, element: <Layout content={<>home page</>} /> },
      {
        path: "explore",
        element: <Layout content={<>explore page</>} />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

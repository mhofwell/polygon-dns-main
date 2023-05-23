import React from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./routes/Root";
import Home from "./routes/Home";
import Account from "./routes/Account";
import ErrorPage from "./routes/Error";

const App = () => {

  const router = createBrowserRouter([
    {
      path: "/",
      id: "root",
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <Home /> },
        {
          path: "account",
          element: <Account />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;

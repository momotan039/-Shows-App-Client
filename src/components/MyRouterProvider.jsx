import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Root from "../pages/Root";
import { useSelector } from "react-redux";
import SignIn from "../pages/sgin in/SignIn";
import SignUp from "../pages/sgin up/SignUp";

export const MyRouterProvider = () => {
  const { user } = useSelector((state) => state.auth);
  const generateRouter = () => {
    const withUser = createBrowserRouter([
      {
        path: "/",
        element: <Root />,
        children: [
          {
            path: "/",
            element: <Home />,
          },
        ],
      },
    ]);
    const withOutUser = createBrowserRouter([
      {
        path: "/",
        element: <Root />,
        children: [
          {
            path: "/",
            element: <SignIn />,
          },
          {
            path: "/sign-up",
            element: <SignUp />,
          },
        ],
      },
    ]);

    return user ? withUser : withOutUser;
  };
  return <RouterProvider router={generateRouter()} />;
};

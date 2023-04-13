import React, { useEffect } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Root from "../pages/Root";
import { useDispatch, useSelector } from "react-redux";
import SignIn from "../pages/sgin in/SignIn";
import SignUp from "../pages/sgin up/SignUp";
import SetupProfile from "./setup profile/SetupProfile";
import { getUserfromStorage } from "../utils/localStorage";
import Dashboard from "../pages/dashboard/Dashboard";
import Show from "../pages/show/Show";

export const MyRouterProvider = () => {

  const { user } = useSelector((state) => state.account);
  const dispatch = useDispatch();
  useEffect(() => {
    getUserfromStorage(dispatch);  
  }, []);

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
          {
            path: "/dashborad",
            element: <Dashboard />,
          },
          {
            path: "/setup-profile",
            element:<SetupProfile/>
          },
          {
            path: "/show",
            element:<Show/>
          },
          {
            path: "*",
            element: <Home />,
          }
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
          {
            path: "*",
            element: <SignIn/>,
          }
        ],
      },
      
    ]);
    return user ? withUser : withOutUser;
  };
  return <RouterProvider router={generateRouter()} />;
};

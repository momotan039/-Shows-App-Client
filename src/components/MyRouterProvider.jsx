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
import Tv from "../pages/tv/Tv";
import NotFound from "../pages/404/NotFound";

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
            element: <SetupProfile/>,
          },
          {
            path: "*",
            element: <NotFound />,
          }
        ],
      },
      
    ]);
    const userFinishSetup=createBrowserRouter([
      {
        path:'/',
        element:<Root/>,
        children:[
          {
            path: "/",
            element: <Home/>,
          },
          {
            path: "/dashborad",
            element: <Dashboard />,
          },
          {
            path: "/tv",
            element: <Tv />,
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
            element: <NotFound />,
          }
        ]
      }
    ])
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
            element: <NotFound/>,
          }
        ],
      },
      
    ]);
    
    if(user && user.preferences)
    return userFinishSetup

    if(user)
    return withUser
    
    return withOutUser;
  };
  return <RouterProvider router={generateRouter()} />;
};

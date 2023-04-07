import React from 'react';
import { RouterProvider as ReactRouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import Root from '../pages/Root';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/sign-in',
        element: <SignIn/>,
      },
      {
        path: '/sign-up',
        element: <SignUp />,
      }
    ],
  },
]);

export const MyRouterProvider = () => {
  return <ReactRouterProvider router={router} />;
};


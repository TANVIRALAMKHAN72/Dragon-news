import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router";
import HomeLayout from "../Layout/HomeLayout";
import Home from "../Page/Home";
import CategoryNews from "../Page/CategoryNews";
import Login from "../Page/Login";
import Register from "../Page/Register";
import AuthLayout from "../Layout/AuthLayout";
import NewsDetails from "../Page/NewsDetails";
import PrivateRoute from "../Provider/PrivateRoute";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout></HomeLayout>,
      children: [
        {   
            path: '',
            element: <Home></Home>
        },
        {
            path: '/category/:id',
            element: <CategoryNews></CategoryNews>,
            loader: () => fetch ('/news.json'),
            hydrateFallbackElement: <span className="loading loading-bars loading-lg"></span>,
        }
      ]
    },
    {
      path: "/about",
      element: <HomeLayout></HomeLayout>,
    },
    {
      path: "/career",
      element: <HomeLayout></HomeLayout>,
    },
    {
      path: "/auth",
      element: <AuthLayout></AuthLayout>,
      children: [
        {
          path: '/auth/login',
          element: <Login></Login>,
        },
        {
          path: '/auth/register',
          element: <Register></Register>,
        },
      ]
    },
    {
      path: "/news-details/:id",
      element: <PrivateRoute>
        <NewsDetails></NewsDetails>
      </PrivateRoute>,
      loader: () => fetch ('/news.json'),
      hydrateFallbackElement: <span className="loading loading-bars loading-lg"></span>,
    },
    {
      path: "/*",
      element: <div>Error404</div>,
    },
  ]);

 export default router;
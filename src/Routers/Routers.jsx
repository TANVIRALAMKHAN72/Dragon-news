import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router";
import HomeLayout from "../Layout/HomeLayout";
import Home from "../Page/Home";
import CategoryNews from "../Page/CategoryNews";

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
            loader: () => fetch ('/news.json')
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
      element: <div>Authentication</div>,
    },
    {
      path: "/news",
      element: <div>News</div>,
    },
    {
      path: "/*",
      element: <div>Error404</div>,
    },
  ]);

 export default router;
import { createBrowserRouter } from "react-router-dom";
import Layout from "../../layout/Layout";
import Home from "../../pages/Home/Home";
import Discover from "../../pages/Discover/Discover";
import Join from "../../pages/Join/Join";

export const router = createBrowserRouter([
  /* {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/join",
        element: <Join />
      },
      {
        path: "/discover",
        element: <Discover />
      }
    ]
  }, */

  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/discover",
    element: <Discover/>
  },
  {
    path: "/join",
    element: <Join/>
  }
  
])
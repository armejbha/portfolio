import React from "react";
import { createBrowserRouter } from "react-router";
import About from "../Pages/Home/About";
import Contact from "../Pages/Home/Contact";
import Projects from "../Pages/Home/Projects";
import Skills from "../Pages/Home/Skills";

const MainLayouts = React.lazy(() => import("../Layouts/MainLayouts"));
const Home = React.lazy(() => import("../Pages/Home/Home"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/about",
        Component: About,
      },
      {
        path: "/skills",
        Component: Skills,
      },
      {
        path: "/project",
        Component: Projects,
      },
      {
        path: "/contact",
        Component: Contact,
      },
    ],
  },
]);

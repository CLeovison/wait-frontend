import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

//Pages
import Root from "./pages/Root/Root";

import About from "./pages/About/About";
import Contact from "./pages/Contacts/Contact";
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import Item from "./pages/Item/Item";
//Error Handling
import ErrorMessage from "./util/ErrorMessage/ErrorMessage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorMessage />,
    children: [
      { path: "/", element: <Home /> },

      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },

      {
        path: "item/:id",
        element: <Item />,
      },
    ],
  },
]);

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

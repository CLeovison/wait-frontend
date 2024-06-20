import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

//Pages
import Root from "./pages/Root/Root";
import Products from "./pages/Products/Products";

//Error Handling
import ErrorMessage from "./util/ErrorMessage/ErrorMessage";
import About from "./pages/About/About";
import Contact from "./pages/Contacts/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorMessage />,
    children: [
      {
        path: "/products",
        element: <Products/>
      },
      {
        path: "/about",
        element: <About/>
      },
      {
        path: "/contact",
        element: <Contact/>
      }
    ]
  },
]);

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

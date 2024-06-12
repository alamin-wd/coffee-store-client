import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root/Root";
import Home from "../pages/Home/Home";
import AddCoffee from "../pages/AddCoffee/AddCoffee";
import UpdateCoffee from "../pages/UpdateCoffee/UpdateCoffee";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children: [
        {
            path: "/",
            element: <Home></Home>,
        },

        {
            path: "addCoffee",
            element: <AddCoffee></AddCoffee>,
        },

        {
            path: "updateCoffee",
            element: <UpdateCoffee></UpdateCoffee>,
        }
      ]
    },
  ]);

  export default router;

  
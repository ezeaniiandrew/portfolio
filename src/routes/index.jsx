import { createBrowserRouter } from "react-router-dom";
import { Landing, NotFound } from "../pages";

const router = createBrowserRouter([
  { path: "/", element: <Landing /> },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;

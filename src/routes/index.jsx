import { createBrowserRouter } from "react-router-dom";
import { Landing, NotFound, ProjectsLayout } from "../pages";
import Layout from "../layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { element: <Landing />, index: true },
      {
        path: "projects",
        element: <ProjectsLayout />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;

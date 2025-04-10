import { createBrowserRouter } from "react-router-dom";
import { Landing, NotFound, Projects } from "../pages";
import Layout from "../layout";
import { ProjectDetail } from "../pages/components";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { element: <Landing />, index: true },
      {
        path: "projects",
        element: <Projects />,
      },
      {
        path: "/projects/:projectId",
        element: <ProjectDetail />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;

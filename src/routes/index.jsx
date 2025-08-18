import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout";
import Landing from "../pages/Landing";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: "/projects/:projectName",
        lazy: async () => {
          const { ProjectDetail } = await import("../pages/ProjectDetail");
          return { Component: ProjectDetail };
        },
      },
      {
        path: "contact",
        lazy: async () => {
          const { Contact } = await import("../pages/Contact");
          return { Component: Contact };
        },
      },
      {
        path: "about",
        lazy: async () => {
          const { About } = await import("../pages/About");
          return { Component: About };
        },
      },
      {
        path: "*",
        lazy: async () => {
          const { NotFound } = await import("../pages/NotFound");
          return { Component: NotFound };
        },
      },
    ],
  },
]);

export default router;

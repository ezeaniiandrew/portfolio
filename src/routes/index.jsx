import { createBrowserRouter } from "react-router-dom";
import { About, Contact, Landing, NotFound, Projects } from "../pages";
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
        path: "/projects/:projectName",
        element: <ProjectDetail />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export default router;

import { useRoutes } from "react-router-dom";
import LandingPage from "./Components/LandingPage";
import ProjectDetails from "./Components/ProjectDetails";
import AboutMe from "./Components/AboutMe";

const AllRoutes = ({ whiteMode }) => {
  // console.log("in routes>", whiteMode);
  let routes = useRoutes([
    {
      path: "/",
      element: <LandingPage whiteMode={whiteMode} />,
    },
    {
      path: "/project-details/:key",
      element: <ProjectDetails whiteMode={whiteMode} />,
    },
    {
      path: "/about",
      element: <AboutMe whiteMode={whiteMode} />,
    },

    // {
    //   path: "*",
    //   element: <PageNotFound />,
    // },
  ]);

  return routes;
};
export default AllRoutes;

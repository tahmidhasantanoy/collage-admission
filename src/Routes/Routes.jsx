import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout/MainLayout";
import Home from "../Pages/Home/Home";
import Collages from "../Pages/Collages/Collages";
import Admission from "../Pages/Admission/Admission";
import MyCollage from "../Pages/MyCollage/MyCollage";
import Login from "../Pages/Login/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/collages",
        element: <Collages />,
      },
      {
        path: "/admission",
        element: <Admission />,
      },
      {
        path: "/mycollage",
        element: <MyCollage />,
      },
      {
        path : "/login",
        element : <Login/>
      }
    ],
  },
]);

export default router;

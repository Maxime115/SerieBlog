import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import ErrorPage from "./pages/ErrorPage";
import { lazy } from "react";
// import { userLoader } from "./loaders/userLoader";
const Homepage = lazy(() => import("./pages/Homepage/Homepage"));
const Profile = lazy(() => import("./pages/Profile/Profile"));
const Login = lazy(() => import("./pages/forms/Login/Login"));
const Register = lazy(() => import("./pages/forms/Register/Register"));
const Admin = lazy(() => import("./pages/forms/Admin/Admin"));
const Details = lazy(() => import("./pages/forms/Details/Details"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // loader: userLoader,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/admin",
        element: <Admin />,
      },

      {
        path: "/",
        element: <Details />,
      },
    ],
  },
]);

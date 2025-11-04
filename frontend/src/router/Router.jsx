import { createHashRouter, Outlet, RouterProvider } from "react-router-dom";
import Home from "../pages/Home";
import Test from "../pages/Test";
import Profile from "../pages/Profile";
import LoginPage from "../pages/LoginPage";
import Register from "../pages/Register";
import Result from "../pages/Result";
import TermsAndConditions from "../pages/TermsAndConditions";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./Router.css";

function Router() {
  const router = createHashRouter([
    {
      children: [
        { element: <Home />, path: "/" },
        { element: <Test />, path: "/test/:question" },
        { element: <Profile />, path: "/profile" },
        { element: <LoginPage />, path: "/login" },
        { element: <Register />, path: "/register" },
        { element: <Result />, path: "/result" },
        { element: <LoginPage />, path: "login" },
        { element: <Register />, path: "register" },
        { element: <TermsAndConditions />, path: "terms-and-conditions" },
      ],
      element: (
        <>
          <Navbar />

          <main className="app-main">
            <Outlet />
          </main>

          <Footer />
        </>
      ),
    },
  ]);

  return <RouterProvider router={router} />;
}

export default Router;

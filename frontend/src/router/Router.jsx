import { lazy, Suspense } from "react";
import { createHashRouter, Outlet, RouterProvider } from "react-router-dom";

import Home from "../pages/Home";
const Test = lazy(() => import("../pages/Test"));
import Profile from "../pages/Profile";
import LoginPage from "../pages/LoginPage";
import Register from "../pages/Register";
import PrivacyPolicy from "../pages/PrivacyPolicy";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./Router.css";

function Router() {
  const router = createHashRouter([
    {
      element: (
        <>
          <Navbar />
          <main className="app-main">
            <Outlet />
          </main>
          <Footer />
        </>
      ),
      children: [
        {
          path: "/",
          element: (
            <Suspense fallback={<div>Laddar...</div>}>
              <Home />
            </Suspense>
          ),
        },
        {
          path: "/test/:question?/:number?",
          element: (
            <Suspense fallback={<div>Laddar...</div>}>
              <Test />
            </Suspense>
          ),
        },
        {
          path: "/profile",
          element: (
            <Suspense fallback={<div>Laddar...</div>}>
              <Profile />
            </Suspense>
          ),
        },
        {
          path: "/login",
          element: (
            <Suspense fallback={<div>Laddar...</div>}>
              <LoginPage />
            </Suspense>
          ),
        },
        {
          path: "/register",
          element: (
            <Suspense fallback={<div>Laddar...</div>}>
              <Register />
            </Suspense>
          ),
        },
        {
          path: "/privacy-policy",
          element: (
            <Suspense fallback={<div>Laddar...</div>}>
              <PrivacyPolicy />
            </Suspense>
          ),
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default Router;

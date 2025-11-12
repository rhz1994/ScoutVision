import { lazy, Suspense } from "react";
import { createHashRouter, Outlet, RouterProvider } from "react-router-dom";

const Home = lazy(() => import("../pages/Home"));
const Test = lazy(() => import("../pages/Test"));
const Profile = lazy(() => import("../pages/Profile"));
const LoginPage = lazy(() => import("../pages/LoginPage"));
const Register = lazy(() => import("../pages/Register"));
const Result = lazy(() => import("../components/Result"));
const TermsAndConditions = lazy(() => import("../pages/TermsAndConditions"));

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
          path: "/result",
          element: (
            <Suspense fallback={<div>Laddar...</div>}>
              <Result />
            </Suspense>
          ),
        },
        {
          path: "/terms-and-conditions",
          element: (
            <Suspense fallback={<div>Laddar...</div>}>
              <TermsAndConditions />
            </Suspense>
          ),
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default Router;

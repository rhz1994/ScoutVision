import { Suspense } from "react";
import { createHashRouter, Outlet, RouterProvider } from "react-router-dom";
import { lazyWithPreload } from "react-lazy-with-preload";
import "./Router.css";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Home = lazyWithPreload(() => import("../pages/Home"));
const Test = lazyWithPreload(() => import("../pages/Test"));
const Profile = lazyWithPreload(() => import("../pages/Profile"));
const LoginPage = lazyWithPreload(() => import("../pages/LoginPage"));
const Register = lazyWithPreload(() => import("../pages/Register"));
const PrivacyPolicy = lazyWithPreload(() => import("../pages/PrivacyPolicy"));
const TermsAndConditions = lazyWithPreload(() =>
  import("../pages/TermsAndConditions")
);

Home.preload();
Test.preload();
Profile.preload();
LoginPage.preload();
Register.preload();
PrivacyPolicy.preload();
TermsAndConditions.preload();

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

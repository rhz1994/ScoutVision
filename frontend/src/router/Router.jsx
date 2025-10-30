import { createHashRouter, Outlet, RouterProvider } from "react-router-dom";
import Home from "../pages/Home";
import Test from "../pages/Test";
import Profile from "../pages/Profile";
import Navbar from "../components/Navbar";

function Router() {
  const router = createHashRouter([
    {
      children: [
        { element: <Home />, path: "/" },
        { element: <Test />, path: "/test" },
        { element: <Profile />, path: "/profile" },
      ],
      element: (
        <>
          <Navbar />

          <main className="App-main">
            <Outlet />
          </main>
        </>
      ),
    },
  ]);

  return <RouterProvider router={router} />;
}

export default Router;

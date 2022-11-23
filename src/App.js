import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import Loading from "./shared/Loading/Loading";
import Footer from "./shared/Footer/Footer";
import Header from "./shared/Header/Header";
import Post from "./admin/post/Post";
const AllProducts = lazy(() => import("./admin/AllProducts/AllProducts"));
const AllUsers = lazy(() => import("./admin/AllUsers/AllUsers"));
const Home = lazy(() => import("./pages/Home/Home"));
const Cart = lazy(() => import("./pages/Cart/Cart"));
const LogIn = lazy(() => import("./pages/LogIn/LogIn"));
const Register = lazy(() => import("./pages/Register/Register"));
const Gift = lazy(() => import("./pages/Gift/Gift"));

const ProductsList = lazy(() =>
  import("./components/ProductsList/ProductsList")
);
const ProductDetails = lazy(() =>
  import("./components/ProductDetails/ProductDetails")
);
const NotFound = lazy(() => import("./shared/NotFound/NotFound"));

const App = () => {
  const User = () => {
    return (
      <>
        <Header />
        <Outlet />
        <Footer />
      </>
    );
  };

  const Admin = () => {
    return (
      <>
        <Header />
        <Outlet />
        <Footer />
      </>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <User />,
      errorElement: <NotFound />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/products",
          element: <ProductsList />,
        },
        {
          path: "products/:productId",
          element: <ProductDetails />,
        },
        {
          path: "cart",
          element: <Cart />,
        },
        {
          path: "gift",
          element: <Gift />,
        },
        {
          path: "post",
          element: <Post />,
        },
      ],
    },

    {
      path: "/admin",
      element: <Admin />,
      errorElement: <NotFound />,
      children: [
        {
          path: "products/post",
          element: <Post />,
        },
        {
          path: "products/all",
          element: <AllProducts />,
        },
        {
          path: "users/all",
          element: <AllUsers />,
        },
      ],
    },

    {
      path: "login",
      element: <LogIn />,
    },
    {
      path: "register",
      element: <Register />,
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);

  return (
    <>
      <Suspense fallback={<Loading />}>
        <RouterProvider router={router} />
      </Suspense>
    </>
  );
};

export default App;

import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import Loading from "./shared/Loading/Loading";
import Footer from "./shared/Footer/Footer";
import Header from "./shared/Header/Header";
const Home = lazy(() => import("./pages/Home/Home"));
const Cart = lazy(() => import("./pages/Cart/Cart"));
const LogIn = lazy(() => import("./pages/LogIn/LogIn"));
const Register = lazy(() => import("./pages/Register/Register"));
const Gift = lazy(() => import('./pages/Gift/Gift'));

const ProductsList = lazy(() =>
  import("./components/ProductsList/ProductsList")
);
const ProductDetails = lazy(() =>
  import("./components/ProductDetails/ProductDetails")
);
const NotFound = lazy(() => import("./shared/NotFound/NotFound"));

const App = () => {
  const LayOut = () => {
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
      element: <LayOut />,
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

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import ProductsList from "./components/ProductsList/ProductsList";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import LogIn from "./pages/LogIn/LogIn";
import Register from "./pages/Register/Register";
import Footer from "./shared/Footer/Footer";
import Header from "./shared/Header/Header";
import NotFound from "./shared/NotFound/NotFound";

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
      ],
    },
    {
      path: 'login',
      element: <LogIn/>
    },
    {
      path: 'register',
      element: <Register/>
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
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
      errorElement: <NotFound/>,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;

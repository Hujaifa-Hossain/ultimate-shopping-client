import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import Header from "./shared/Header/Header";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <div>Hello world!</div>,
    },
  ]);

  return (
    <>
      <Header />
      <RouterProvider router={router} />
    </>
  );
};

export default App;

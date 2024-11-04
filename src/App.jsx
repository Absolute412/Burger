import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./components/Home";
import { Order } from "./components/Order";
import { Menu } from "./components/Menu";
import { Offers } from "./components/Offers";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "order",
    element: <Order/>
  },
  {
    path: "menu",
    element: <Menu/>
  },
  {
    path: "offers",
    element: <Offers/>
  }
]);

function App() {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App
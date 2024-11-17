import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactGA from "react-ga4";
import Home from "./pages/home";
import Two from "./pages/two";
import Three from "./pages/three";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/two",
    element: <Two />,
  },
  {
    path: "/three",
    element: <Three />,
  },
]);

const GA_ID = import.meta.env.VITE_GA_ID;
ReactGA.initialize(GA_ID);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

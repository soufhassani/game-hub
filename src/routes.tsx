import { createBrowserRouter } from "react-router-dom";
import GameDetails from "./pages/GameDetails";
import Layout from "./App";
import HomePage from "./pages/HomePage";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "games/:slug", element: <GameDetails /> },
    ],
  },
]);

export default router;

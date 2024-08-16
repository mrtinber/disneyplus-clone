import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { Header } from "./components/layout/Header";
import { Homepage } from "./pages/Homepage";
import { Studio } from "./pages/Studio";
import { MovieDetails } from "./pages/MovieDetails";
import { SeriesPage } from "./pages/SeriesPage";

const Layout = () => (
    <>
        <Header />
        <Outlet />
    </>
);

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: (
            <p className="text-white">Whoops, something went wrong !</p>
        ),
        children: [
            {
                path: "",
                element: <Homepage />,
            },
            {
                path: "studio/:companyId",
                element: <Studio />,
            },
            {
                path: "movie/details/:id",
                element: <MovieDetails />,
            },
            {
                path: "tv/details/:id",
                element: <SeriesPage />,
            },
        ],
    },
]);

export function Router() {
    return <RouterProvider router={router} />;
}

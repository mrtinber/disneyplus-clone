import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { Header } from "./layout/Header";
import { Homepage } from "./pages/Homepage";
import { Studio } from "./pages/Studio";
import { MoviePage } from "./pages/MoviePage";
import { SeriesPage } from "./pages/SeriesPage";
import { ErrorPage } from "./pages/ErrorPage";
import { Footer } from "./layout/Footer";

const Layout = () => (
    <>
        <Header />
        <Outlet />
        <Footer />
    </>
);

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: (
            <ErrorPage />
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
                element: <MoviePage />,
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

import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { Header } from "./layout/Header";
import { HomePage } from "./pages/HomePage";
import { StudioPage } from "./pages/StudioPage";
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
        errorElement: <ErrorPage />,
        children: [
            {
                path: "",
                element: <HomePage />,
            },
            {
                path: "studio/:companyId",
                element: <StudioPage />,
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
    {
        path: "error",
        element: <ErrorPage />,
    },
]);

export function Router() {
    return <RouterProvider router={router} />;
}

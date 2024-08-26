import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { Header } from "./presentation/layout/Header";
import { HomePage } from "./presentation/pages/HomePage";
import { StudioPage } from "./presentation/pages/StudioPage";
import { MoviePage } from "./presentation/pages/MoviePage";
import { SeriesPage } from "./presentation/pages/SeriesPage";
import { ErrorPage } from "./presentation/pages/ErrorPage";
import { Footer } from "./presentation/layout/Footer";

const Layout = () => (
    <>
        <Header />
        <Outlet />
        <Footer />
    </>
);

const router = createBrowserRouter([
    {
        path: "/disneyplus-clone/",
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/disneyplus-clone/",
                element: <HomePage />,
            },
            {
                path: "/disneyplus-clone/studio/:companyId",
                element: <StudioPage />,
            },
            {
                path: "/disneyplus-clone/movie/details/:id",
                element: <MoviePage />,
            },
            {
                path: "/disneyplus-clone/tv/details/:id",
                element: <SeriesPage />,
            },
        ],
    },
    {
        path: "/disneyplus-clone/error",
        element: <ErrorPage />,
    },
]);

export function Router() {
    return <RouterProvider router={router} />;
}

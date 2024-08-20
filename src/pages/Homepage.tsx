import { Categories } from "../components/home/Categories";
import MovieGenresList from "../components/home/MovieGenresList";
import { Slider } from "../components/home/Slider";
import { Footer } from "../layout/Footer";

export const Homepage = () => {
    return (
        <>
            <div className="py-16">
                <Slider />
                <Categories />
                <MovieGenresList />
            </div>
            <Footer />
        </>
    );
};

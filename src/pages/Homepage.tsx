import { Categories } from "../components/Categories";
import MovieGenresList from "../components/MovieGenresList";
import { Slider } from "../components/Slider";

export const Homepage = () => {
    return (
        <div className="py-16">
            <Slider />
            <Categories />
            <MovieGenresList />
        </div>
    );
};

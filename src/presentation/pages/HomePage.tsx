import { Categories } from "../components/home/Categories";
import MovieGenresList from "../components/home/MovieGenresList";
import { Slider } from "../components/home/Slider";

export const HomePage = () => {
    return (
        <>
            <div className="py-16">
                <Slider />
                <Categories />
                <MovieGenresList />
            </div>
        </>
    );
};

import { useEffect, useRef, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { PosterCard } from "../shared/PosterCard";
import { MovieCard } from "../shared/MovieCard";
import { Movie } from "../../../domain/types/movie";
import { getMoviesByGenre } from "../../../infrastructure/services/ApiCall";

const widthSlider = window.innerWidth;

export const MovieListByGenre = ({
    genreId,
    indexId,
}: {
    genreId: number;
    indexId: number;
}) => {
    const [movieList, setMovieList] = useState<Movie[]>([]);
    const elementRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        fetchMovies();
    }, [genreId]);

    const slideLeft = (element: HTMLDivElement | null) => {
        if (element) {
            element.scrollLeft -= widthSlider - 150;
        }
    };
    const slideRight = (element: HTMLDivElement | null) => {
        if (element) {
            element.scrollLeft += widthSlider - 150;
        }
    };

    const fetchMovies = async () => {
        try {
            const data = await getMoviesByGenre(genreId);
            setMovieList(data.results);
        } catch (error) {
            console.error("Failed to fetch movies", error);
        }
    };

    return (
        <div className="relative">
            <IoIosArrowBack
                onClick={() => slideLeft(elementRef.current)}
                className="text-[50px] text-white p-2 z-50 cursor-pointer hidden md:block hover:scale-125 transition-all absolute top-1/2 transform -translate-y-1/2"
                aria-label="Slide left"
            />

            <div
                className="flex overflow-x-auto overflow-y-hidden h-full gap-8 scrollbar-hide scroll-smooth pt-4 px-3 pb-4 z-20"
                ref={elementRef}
            >
                {movieList.map((item, index) => (
                    <>
                        {indexId % 3 === 0 ? (
                            <MovieCard key={index} media={item} />
                        ) : (
                            <PosterCard key={index} media={item} />
                        )}
                    </>
                ))}
            </div>

            <IoIosArrowForward
                onClick={() => slideRight(elementRef.current)}
                className="text-[50px] text-white p-2 z-50 cursor-pointer hidden md:block hover:scale-125 transition-all absolute right-0 top-1/2 transform -translate-y-1/2"
                aria-label="Slide right"
            />
        </div>
    );
};
